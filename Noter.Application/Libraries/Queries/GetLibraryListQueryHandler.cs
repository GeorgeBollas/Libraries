using MediatR;
using Microsoft.EntityFrameworkCore;
using Noter.Persistance;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Noter.Application.Libraries.Queries
{
    public class GetLibraryListQueryHandler : IRequestHandler<GetLibraryListQuery, LibraryListViewModel>
    {
        private readonly NoterDbContext _context;
        public GetLibraryListQueryHandler(NoterDbContext context)
        {
            _context = context;
        }

        public async Task<LibraryListViewModel> Handle(GetLibraryListQuery request, CancellationToken cancellationToken)
        {
            // TODO: Set view model state based on user permissions.
            var model = new LibraryListViewModel
            {
                Libraries = await _context.Libraries
                    .Select(LibraryDto.Projection)
                    .OrderBy(p => p.Name)
                    .ToListAsync(cancellationToken)
            };

            return model;
        }

    }
}
