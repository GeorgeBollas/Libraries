using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Notes.Commands.UpdateNote
{
    public class UpdateNoteCommandValidator: AbstractValidator<UpdateNoteCommand>
    {
        public UpdateNoteCommandValidator()
        {
            RuleFor(n => n.Id).NotEmpty();
            RuleFor(n => n.Title).NotEmpty().Length(100);
        }
    }
}
