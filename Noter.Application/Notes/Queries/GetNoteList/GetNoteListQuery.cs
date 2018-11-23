using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Notes.Queries.GetNoteList
{
    public class GetNoteListQuery: IRequest<NoteListViewModel>
    {
        public string PartTitle { get; set; }
    }
}
