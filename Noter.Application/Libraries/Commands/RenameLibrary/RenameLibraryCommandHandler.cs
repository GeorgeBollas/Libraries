using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Noter.Application.Exceptions;
using Noter.Domain.Entities;
using Noter.Persistance;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Noter.Application.Libraries.Commands.RenameLibrary
{
    public class RenameLibraryCommandHandler : IRequestHandler<RenameLibraryCommand, RenameLibraryCommandResult>
    {
        private readonly NoterDbContext context;
        private readonly ILogger logger;
        private Library library;

        public RenameLibraryCommandHandler(NoterDbContext context, ILogger<RenameLibraryCommandHandler> logger)
        {
            this.context = context;
            this.logger = logger;
        }


        public async Task<RenameLibraryCommandResult> Handle(RenameLibraryCommand request, CancellationToken cancellationToken)
        {
            var result = new RenameLibraryCommandResult(request.RequestGuid);

            try
            {

                var lib = context.Libraries.SingleOrDefault(l => l.Id == request.LIbraryId);

                if (lib == null)
                    throw new ArgumentException($"Library {request.LIbraryId} was not found");

                lib.Name = request.Name;
                lib.Description = request.Description;
                
                await context.SaveChangesAsync(cancellationToken);


                return result;
            }
            catch (Exception ex)
            {
                //todo change this to error notifier which calls logger and maybe notifies user/email etc or maybe an array of notifiers
                logger.LogError(ex, $"RenameLibraryCommandHandler failed:{request.RequestGuid}");

                throw (ex);
            }
        }
    }
}
