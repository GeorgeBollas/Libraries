using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Notes.Commands.DeleteNote
{
    public class DeleteNoteCommand: IRequest
    {
        public int Id { get; set; }
    }
}
