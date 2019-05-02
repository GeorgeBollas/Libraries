using Noter.Application.Infrastructure.Commanding;
using System;

namespace Noter.Application.Tags.Commands.CreateTagType
{
    public class CreateTagTypeCommandResult : CommandResultBase
    {
        public CreateTagTypeCommandResult(Guid requestGuid) : base(requestGuid) { }

        public int TagTypeId { get; set; }
    }
}