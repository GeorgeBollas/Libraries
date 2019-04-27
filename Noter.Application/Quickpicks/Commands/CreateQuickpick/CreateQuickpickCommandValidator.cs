using FluentValidation;
using Noter.Application.Infrastructure.Commanding;

namespace Noter.Application.Quickpicks.Commands.CreateQuickpick
{
    public class CreateQuickpickCommandValidator : CommandValidatorBase<CreateQuickpickCommand>
    {
        public CreateQuickpickCommandValidator() : base()
        {
            //RuleFor(n => n.Title).MaximumLength(100).NotEmpty().WithMessage("Item title is required");
        }
    }
}
