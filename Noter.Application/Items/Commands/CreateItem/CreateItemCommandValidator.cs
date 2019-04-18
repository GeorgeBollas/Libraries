using FluentValidation;
using Noter.Application.Infrastructure.Commanding;

namespace Noter.Application.Items.Commands.CreateItem
{
    public class CreateItemCommandValidator : CommandValidatorBase<CreateItemCommand>
    {
        public CreateItemCommandValidator() : base() //todo is this called anyway?
        {
            RuleFor(n => n.Title).MaximumLength(100).NotEmpty().WithMessage("Item title is required");
        }
    }
}
