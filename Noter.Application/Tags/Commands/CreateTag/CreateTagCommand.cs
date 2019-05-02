using Noter.Application.Infrastructure.Commanding;

namespace Noter.Application.Tags.Commands.CreateTag
{
    public class CreateTagCommand : CommandRequestBase<CreateTagCommandResult>
    {
        public int TagTypeId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public bool IsPinned { get; set; }

    }
}