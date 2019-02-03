using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Noter.Application.Libraries.Commands.CreateLibrary
{
    public class CreateLibraryCommandValidator : AbstractValidator<CreateLibraryCommand>
    {
        public CreateLibraryCommandValidator()
        {
            RuleFor(n => n.RequestGuid).NotEmpty();

            RuleFor(n => n.Name).MaximumLength(100).NotEmpty();

            //todo split an check
            //RuleFor(l => l).Must(t => t.Tags.Count() == t.Tags.Distinct().Count()).WithMessage("Tags must be unique");
        }
    }
}
