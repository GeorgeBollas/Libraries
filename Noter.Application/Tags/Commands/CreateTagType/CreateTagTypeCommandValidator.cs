using FluentValidation;
using Noter.Application.Infrastructure.Commanding;
using Noter.Application.Services;

namespace Noter.Application.Tags.Commands.CreateTagType
{
    public class CreateTagTypeCommandValidator : CommandValidatorBase<CreateTagTypeCommand>
    {
        private readonly IMessageBuilder messageBuilder;

        public CreateTagTypeCommandValidator(IMessageBuilder messageBuilder) : base() 
        {
            this.messageBuilder = messageBuilder;

            RuleFor(n => n.Name).NotEmpty().WithMessage(messageBuilder.GenRequired("Name"));

            RuleFor(n => n.Name).MaximumLength(100).WithMessage(messageBuilder.GenMaxLen("Name",100));
        }
    }
}
