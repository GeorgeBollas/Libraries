using MediatR;
using Microsoft.Extensions.Logging;
using Noter.Domain.Entities;
using Noter.Application.Exceptions;
using Noter.Persistance;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Linq;

namespace Noter.Application.Libraries.Commands.ToggleLibraryPin
{

    public class ToggleLibraryPinCommandHandler : IRequestHandler<ToggleLibraryPinCommand, ToggleLibraryPinCommandResult>
    {
        private readonly NoterDbContext context;
        private readonly ILogger logger;

        private IQueryable<Library> pinnedLibraries;

        public ToggleLibraryPinCommandHandler(NoterDbContext context, ILogger<ToggleLibraryPinCommandHandler> logger)
        {
            this.context = context;
            this.logger = logger;
        }

        public async Task<ToggleLibraryPinCommandResult> Handle(ToggleLibraryPinCommand request, CancellationToken cancellationToken)
        {
            var result = new ToggleLibraryPinCommandResult(request.RequestGuid);

            pinnedLibraries = context.Libraries.Where(l => l.IsPinned).OrderBy(l => l.Sequence).ThenBy(l => l.Name);

            var lib = pinnedLibraries.SingleOrDefault(l => l.Id == request.LibraryId);

            if (lib == null)
            {
                throw new ValidationException(new List<FluentValidation.Results.ValidationFailure>()
                {
                    new FluentValidation.Results.ValidationFailure("LibraryId", "Library was not found")
                });
            }

            // setting to false

            if (request.IsPinned == false)
            {
                lib.Sequence = Library.MaxSeuquence;
                lib.IsPinned = false;

                CleanupSequences();

                await context.SaveChangesAsync();

                return result;
            }

            // setting to true





            throw new NotImplementedException();
        }

        //todo move this to a generic helper in common library

        /// <summary>
        /// read the pinned only and check their sequence fixing any that you require 
        /// </summary>
        private void CleanupSequences()
        {

            int sequence = 0;
            foreach (var lib in pinnedLibraries)
            {
                if (lib.Sequence != sequence)
                {
                    lib.Sequence = sequence;
                }

                sequence++;
            }
        }
    }

}
