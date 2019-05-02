using FluentValidation;
using Noter.Application.Infrastructure.Commanding;

namespace Noter.Application.Libraries.Commands.RenameLibrary
{
    public class RenameLibraryCommandValidator : CommandValidatorBase<RenameLibraryCommand>
    {
        public RenameLibraryCommandValidator() : base()
        {
            RuleFor(n => n.LIbraryId).NotEmpty().WithMessage("Library id is required");
            RuleFor(n => n.Name).NotEmpty().WithMessage("Library name is required");
            RuleFor(n => n.Name).MaximumLength(100).WithMessage("Library name maximum 100 character");
        }
    }
}
