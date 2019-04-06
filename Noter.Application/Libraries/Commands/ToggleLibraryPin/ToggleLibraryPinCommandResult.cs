using Noter.Application.Infrastructure.Commanding;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Libraries.Commands.ToggleLibraryPin
{
    public class ToggleLibraryPinCommandResult : CommandResultBase
    {
        public ToggleLibraryPinCommandResult(Guid requestGuid) : base(requestGuid) { }

    }
}
