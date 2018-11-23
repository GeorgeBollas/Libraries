using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Notes.Commands.DeleteNote
{
    public class DeleteNoteCommandValidator: AbstractValidator<DeleteNoteCommand>
    {
        public DeleteNoteCommandValidator()
        {
            RuleFor(n => n.Id).NotEmpty();
        }
    }
}
