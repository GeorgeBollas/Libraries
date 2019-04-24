using FluentValidation;
using Noter.Application.Infrastructure.Commanding;

namespace Noter.Application.Libraries.Commands.RenameLibrary
{
    public class RenameLibraryCommandValidator : CommandValidatorBase<RenameLibraryCommand>
    {
        public RenameLibraryCommandValidator() : base()
        {
            //RuleFor(n => n.Title).MaximumLength(100).NotEmpty().WithMessage("Item title is required");
        }
    }
}
