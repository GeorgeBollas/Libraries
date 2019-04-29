using Noter.Application.Infrastructure.Commanding;
using System;

namespace Noter.Application.Quickpicks.Commands.CreateQuickpick
{
    public class CreateQuickpickCommandResult : CommandResultBase
    {
        public CreateQuickpickCommandResult(Guid requestGuid) : base(requestGuid) { }
    }
}