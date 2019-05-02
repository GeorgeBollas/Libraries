using FluentValidation;
using Noter.Application.Infrastructure.Commanding;
using Noter.Application.Services;

namespace Noter.Application.Tags.Commands.CreateTag
{
    public class CreateTagCommandValidator : CommandValidatorBase<CreateTagCommand>
    {
        private readonly IMessageBuilder messageBuilder;

        public CreateTagCommandValidator(IMessageBuilder messageBuilder) : base() 
        {
            this.messageBuilder = messageBuilder;

            RuleFor(n => n.Name).NotEmpty().WithMessage(messageBuilder.GenRequired("Name"));

            RuleFor(n => n.Name).MaximumLength(100).WithMessage(messageBuilder.GenMaxLen("Name", 100));

        }
    }
}
