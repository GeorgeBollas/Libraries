using Noter.Application.Infrastructure.Commanding;
using System;

namespace Noter.Application.Tags.Commands.CreateTag
{
    public class CreateTagCommandResult : CommandResultBase
    {
        public CreateTagCommandResult(Guid requestGuid) : base(requestGuid) { }

        public int TagId { get; set; }

    }
}