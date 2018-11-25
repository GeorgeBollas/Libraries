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
            var entity = await _context.Libraries.Include(l => l.Tags).Where(l => l.Id == request.LibraryId).FirstOrDefaultAsync();

            if (entity == null)
            {
                throw new NotFoundException(nameof(Libraries), request.LibraryId);
            }

            var lib = new LibraryDetailsViewModel
            {
                LibraryId = entity.Id,
                Name = entity.Name,
                Notes = entity.Notes,

                Tags = entity.Tags.Select(t => new LibraryDetailsTagDto() {  TagId = t.Id, Name = t.Name}).ToList(),

                IsEditable = entity.EntityStatus == Domain.Enumerations.EntityStatus.Active
            };

            //todo: format tags

            //todo: get recent documents if selected
            if (request.IncludeRecentDocuments)
                lib.RecentDocuments = GetRecentDocuments(request.LibraryId, request.MaxDocumentCount);

            return lib;
        }

        private IEnumerable<LibraryDetailsDocumentDto> GetRecentDocuments(int libraryId, int maxDocumentCount)
        {
            return _context.Documents
                .Where(d => d.LibraryId == libraryId)
                .OrderByDescending(d => d.Modified)
                .Select(d => new LibraryDetailsDocumentDto() {  DocumentId = d.Id, Title = d.Title})
                .Take(maxDocumentCount)
                .ToList();
        }
    }
}
