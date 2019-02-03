using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Noter.Persistance;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Noter.Application.Libraries.Queries.GetLibraryList
{
    public class GetLibraryListQueryHandler : IRequestHandler<GetLibraryListQuery, LibraryListViewModel>
    {
        private readonly NoterDbContext _context;
        private readonly ILogger<GetLibraryListQueryHandler> logger;

        public GetLibraryListQueryHandler(NoterDbContext context, ILogger<GetLibraryListQueryHandler> logger)
        {
            _context = context;
            this.logger = logger;
        }

        public async Task<LibraryListViewModel> Handle(GetLibraryListQuery request, CancellationToken cancellationToken)
        {
            logger.LogDebug("GetLibraryListQuery {@value1}", request);

            // TODO: Set view model state based on user permissions.
            var model = new LibraryListViewModel
            {
                Libraries = await _context.Libraries
                    .Select(LibraryListDto.Projection)
                    .OrderBy(p => p.Name)
                    .ToListAsync(cancellationToken)
            };

            return model;
        }

    }
}
