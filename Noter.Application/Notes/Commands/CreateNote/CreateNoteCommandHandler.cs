using MediatR;
using Noter.Domain.Entities;
using Noter.Persistance;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Noter.Application.Notes.Commands.CreateNote
{
    public class CreateNoteCommandHandler : IRequestHandler<CreateNoteCommand>
    {
        private readonly NoterDbContext _context;

        public CreateNoteCommandHandler(NoterDbContext context)
        {
            _context = context;
        }


        public async Task<Unit> Handle(CreateNoteCommand request, CancellationToken cancellationToken)
        {
            var note = new Note
            {
                Guid = Guid.NewGuid(),
                Title = request.Title,
                Notes = request.Notes,
                EntityStatus = Domain.Enumerations.EntityStatus.Active,
                Created = DateTime.Now,
                Modified = DateTime.Now
            };

            _context.Notes.Add(note);

            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}
