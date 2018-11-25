using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Libraries.Commands.UpdateLibrary
{
    public class UpdateLibraryCommandValidator: AbstractValidator<UpdateLibraryCommand>
    {
        public UpdateLibraryCommandValidator()
        {
            RuleFor(v => v.Name).MaximumLength(100).NotEmpty();
        }
    }
}
