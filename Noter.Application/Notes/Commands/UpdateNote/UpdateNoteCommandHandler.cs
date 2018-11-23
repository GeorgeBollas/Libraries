using MediatR;
using Microsoft.EntityFrameworkCore;
using Noter.Application.Exceptions;
using Noter.Domain.Entities;
using Noter.Persistance;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Noter.Application.Notes.Commands.UpdateNote
{
    public class UpdateNoteCommandHandler : IRequestHandler<UpdateNoteCommand>
    {
        private readonly NoterDbContext _context;

        public UpdateNoteCommandHandler(NoterDbContext context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(UpdateNoteCommand request, CancellationToken cancellationToken)
        {

            var entity = await _context.Notes
                .SingleAsync(c => c.Id == request.Id, cancellationToken);

            if (entity == null)
            {
                throw new NotFoundException(nameof(Note), request.Id);
            }

            entity.Title = request.Title;
            entity.Notes= request.Notes;

            entity.Modified = DateTime.Now;

            _context.Notes.Update(entity);

            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}
