using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Notes.Commands.CreateNote
{
    public class CreateNoteCommand: IRequest
    {
        public string Title { get; set; }
        public string Notes { get; set; }
    }
}
