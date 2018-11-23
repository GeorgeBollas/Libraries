using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Notes.Commands.CreateNote
{
    public class CreateNoteCommandValidation: AbstractValidator<CreateNoteCommand>
    {
        public CreateNoteCommandValidation()
        {
            RuleFor(n => n.Title).MaximumLength(100).NotEmpty();
        }
    }
}
