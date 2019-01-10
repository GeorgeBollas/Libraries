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

        private Library _library;

        public CreateLibraryCommandHandler(NoterDbContext context)
        {
            _context = context;
        }


        public async Task<Unit> Handle(CreateLibraryCommand request, CancellationToken cancellationToken)
        {
            // rewrite and push to domain model

            CreateLibrary(request);

            CreateTags(request);

            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }

        private void CreateTags(CreateLibraryCommand request)
        {
            foreach (var tagName in request.Tags)
            {
                var tag = new Tag()
                {
                    Name = tagName,
                    Guid = Guid.NewGuid(),
                    EntityStatus = Domain.Enumerations.EntityStatus.Active,
                    Created = DateTime.Now,
                    Modified = DateTime.Now,

                    Library = _library
                };

                _context.Tags.Add(tag);
            }
            throw new NotImplementedException();
        }

        private void CreateLibrary(CreateLibraryCommand request)
        {
            _library = new Library
            {
                Guid = Guid.NewGuid(),
                Name = request.Name,
                Notes = request.Notes,
                EntityStatus = Domain.Enumerations.EntityStatus.Active,
                Created = DateTime.Now,
                Modified = DateTime.Now
            };

            _context.Libraries.Add(_library);
        }
    }
}
