using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Noter.Application.Exceptions;
using Noter.Persistance;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Noter.Application.Libraries.Queries.GetTagTypeList
{
    public class GetTagTypeListQueryHandler : IRequestHandler<GetTagTypeListQuery, TagTypeListViewModel>
    {
        private readonly NoterDbContext _context;
        private readonly ILogger<GetTagTypeListQueryHandler> logger;

        public GetTagTypeListQueryHandler(NoterDbContext context, ILogger<GetTagTypeListQueryHandler> logger)
        {
            _context = context;
            this.logger = logger;
        }


        // get tag type, if include tags then get tags and sort by appropriate order

        public async Task<TagTypeListViewModel> Handle(GetTagTypeListQuery request, CancellationToken cancellationToken)
        {
            logger.LogDebug("GetTagTypeListQuery {@value1}", request);

            var q = request.IncludeTags? _context.TagTypes.Include(tt => tt.Tags): _context.TagTypes.AsQueryable();

            //todo: don't repeat yourself
            if (request.PinnedTagsFirst)
            {
                var model = new TagTypeListViewModel
                {
                    TagTypes = await q
                        .OrderBy(l => l.Name) // do this here because later we will be using virtual lists and paging
                        .Select(TagTypeListDto.Projection)
                        .ToListAsync(cancellationToken)
                };

                return model;

            }
            else
            {
                var model = new TagTypeListViewModel
                {
                    TagTypes = await _context.TagTypes
                        .Include(tt => tt.Tags)
                        .OrderBy(l => l.Name)
                        .Select(TagTypeListDto.Projection)
                        .ToListAsync(cancellationToken)
                };

                return model;

                // TODO: Set view model state based on user permissions.
            }
        }
    }
}
