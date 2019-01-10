using MediatR;
using Noter.Application.Exceptions;
using Noter.Domain.Entities;
using Noter.Domain.Exeptions;
using Noter.Persistance;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Noter.Application.Libraries.Commands.DeleteLibrary
{
    public class DeleteLibraryCommandHandler : IRequestHandler<DeleteLibraryCommand>
    {
        private readonly NoterDbContext _context;

        public DeleteLibraryCommandHandler(NoterDbContext context)
        {
            _context = context;
        }


        public async Task<Unit> Handle(DeleteLibraryCommand request, CancellationToken cancellationToken)
        {
            var entity = await _context.Libraries
                 .FindAsync(request.LibraryId);

            if (entity == null)
            {
                throw new NotFoundException(nameof(Library), request.LibraryId);
            }

            if (!request.DeleteItems)
            {
                var hasItems = _context.Items.Any(d => d.LibraryId == request.LibraryId);
                if (hasItems)
                {
                    throw new DeleteFailureException(nameof(Library), request.LibraryId, "There are existing item in this library");
                }
            }

            _context.Libraries.Remove(entity);

            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;

        }
    }
}
