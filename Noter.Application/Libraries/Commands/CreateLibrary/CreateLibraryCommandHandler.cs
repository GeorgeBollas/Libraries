using MediatR;
using Noter.Domain.Entities;
using Noter.Persistance;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Noter.Application.Libraries.Commands.CreateLibrary
{
    public class CreateLibraryCommandHandler : IRequestHandler<CreateLibraryCommand>
    {
        private readonly NoterDbContext _context;

        public CreateLibraryCommandHandler(NoterDbContext context)
        {
            _context = context;
        }


        public async Task<Unit> Handle(CreateLibraryCommand request, CancellationToken cancellationToken)
        {
            var library = new Library
            {
                Guid = Guid.NewGuid(),
                Name = request.Name,
                Notes = request.Notes,
                EntityStatus = Domain.Enumerations.EntityStatus.Active,
                Created = DateTime.Now,
                Modified = DateTime.Now
            };

            _context.Libraries.Add(library);

            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}
