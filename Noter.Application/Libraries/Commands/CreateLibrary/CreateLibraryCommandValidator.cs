using FluentValidation;
using Noter.Application.Infrastructure.Commanding;

namespace Noter.Application.Libraries.Commands.CreateLibrary
{
    public class CreateLibraryCommandValidator : CommandValidatorBase<CreateLibraryCommand>
    {
        public CreateLibraryCommandValidator():base() //todo is this called anyway?
        {

            RuleFor(n => n.Name).MaximumLength(100).NotEmpty().WithMessage("Library name is required");

            // now handled in code by getting distinct list first
            //RuleFor(l => l).Must(t => t.Tags.Count() == t.Tags.Distinct().Count()).WithMessage("Tags must be unique");
        }
    }
}
