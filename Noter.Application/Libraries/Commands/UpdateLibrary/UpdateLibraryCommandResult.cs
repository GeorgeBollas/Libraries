using Noter.Application.Infrastructure.Commanding;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Libraries.Commands.UpdateLibrary
{
    public class UpdateLibraryCommandResult: CommandResultBase
    {
        public UpdateLibraryCommandResult(Guid requestGuid) : base(requestGuid) { }
    }
}
