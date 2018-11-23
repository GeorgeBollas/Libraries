using MediatR;
using Microsoft.EntityFrameworkCore;
using Noter.Domain.Entities;
using Noter.Persistance;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Noter.Application.Notes.Queries.GetNoteList
{
    public class GetNoteListHandler : IRequestHandler<GetNoteListQuery, NoteListViewModel>
    {
        private readonly NoterDbContext _context;

        public GetNoteListHandler(NoterDbContext context)
        {
            _context = context;
        }


        public async Task<NoteListViewModel> Handle(GetNoteListQuery request, CancellationToken cancellationToken)
        {
            var query = _context.Notes.AsQueryable();

            if (!string.IsNullOrEmpty(request.PartTitle))
                query = query.Where(n => n.Title.Contains(request.PartTitle));

            var vm = new NoteListViewModel
            {
                Notes = await query
                .Select(n =>
                    new NoteModel
                    {
                        Id = n.Id,
                        Title = n.Title,
                        NotesSummary = n.Notes.Substring(0, 100)
                    }
                ).ToListAsync(cancellationToken)
            };

            return vm;
        }
    }
}
