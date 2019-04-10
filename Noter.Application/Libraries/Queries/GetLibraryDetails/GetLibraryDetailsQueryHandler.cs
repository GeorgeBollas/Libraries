using MediatR;
using Microsoft.EntityFrameworkCore;
using Noter.Application.Exceptions;
using Noter.Persistance;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Noter.Application.Libraries.Queries.GetLibraryDetails
{
    public class GetLibraryDetailsQueryHandler : IRequestHandler<GetLibraryDetailsQuery, LibraryDetailsViewModel>
    {
        private readonly NoterDbContext _context;
        public GetLibraryDetailsQueryHandler(NoterDbContext context)
        {
            _context = context;
        }

        public async Task<LibraryDetailsViewModel> Handle(GetLibraryDetailsQuery request, CancellationToken cancellationToken)
        {
            var entity = await _context.Libraries
                .Include(l => l.LibraryTagTypes)
                .ThenInclude(ltt => ltt.TagType)
                //.Include(l => l.LibraryTagTypes.Select(ltt => ltt.TagType))
                .Where(l => l.Id == request.LibraryId).FirstOrDefaultAsync();

            if (entity == null)
            {
                throw new NotFoundException(nameof(Libraries), request.LibraryId);
            }

            var lib = new LibraryDetailsViewModel
            {
                LibraryId = entity.Id,
                Name = entity.Name,
                Notes = entity.Notes,

                TagTypes = entity.LibraryTagTypes.Select(tt => new LibraryDetailsTagTypeDto() { TagTypeId = tt.TagTypeId, Name = tt.TagType.Name }).ToList(),

                IsEditable = entity.EntityStatus == Domain.Enumerations.EntityStatus.Active
            };

            //todo: format tags

            //todo: get recent items if selected
            if (request.IncludeRecentItems)
                lib.RecentItems = GetItemsItemss(request.LibraryId, request.MaxItemCount);

            return lib;
        }

        private IEnumerable<LibraryDetailsItemDto> GetItemsItemss(int libraryId, int maxItemCount)
        {
            return _context.Items
                .Where(d => d.LibraryId == libraryId)
                .OrderByDescending(d => d.Modified)
                .Select(d => new LibraryDetailsItemDto() { ItemId = d.Id, Title = d.Title })
                .Take(maxItemCount)
                .ToList();
        }
    }
}
