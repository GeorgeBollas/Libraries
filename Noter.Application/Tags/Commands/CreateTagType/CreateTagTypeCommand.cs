using Noter.Application.Infrastructure.Commanding;

namespace Noter.Application.Tags.Commands.CreateTagType
{
    public class CreateTagTypeCommand : CommandRequestBase<CreateTagTypeCommandResult>
    {
        public string Name { get; set; }

        public string Description { get; set; }
    }
}