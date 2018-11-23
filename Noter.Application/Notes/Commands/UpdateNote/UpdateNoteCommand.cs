using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Notes.Commands.UpdateNote
{
    public class UpdateNoteCommand: IRequest
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Notes { get; set; }
    }
}
