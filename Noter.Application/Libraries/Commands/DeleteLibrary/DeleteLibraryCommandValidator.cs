using System;
using System.Collections.Generic;
using System.Text;
using FluentValidation;

namespace Noter.Application.Libraries.Commands.DeleteLibrary
{
    public class DeleteLibraryCommandValidator : AbstractValidator<DeleteLibraryCommand>
    {
        public DeleteLibraryCommandValidator()
        {
            RuleFor(v => v.LibraryId).NotEmpty(); //todo do we need this for non string non nullable?
        }

    }
}
