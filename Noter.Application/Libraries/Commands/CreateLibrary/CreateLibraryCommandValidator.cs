using FluentValidation;
using Noter.Application.Infrastructure.Commanding;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Noter.Application.Libraries.Commands.CreateLibrary
{
    public class CreateLibraryCommandValidator : CommandValidatorBase<CreateLibraryCommand>
    {
        public CreateLibraryCommandValidator():base() //todo is this called anyway?
        {

            RuleFor(n => n.Name).MaximumLength(100).NotEmpty();

            //todo split an check
            //RuleFor(l => l).Must(t => t.Tags.Count() == t.Tags.Distinct().Count()).WithMessage("Tags must be unique");
        }
    }
}
