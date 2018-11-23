using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Notes.Queries.GetNoteList
{
    public class NoteModel
    {
        public int Id { get; set; }
        public Guid Guid { get; set; }
        public string Title { get; set; }
        public string NotesSummary { get; set; }
    }
}
