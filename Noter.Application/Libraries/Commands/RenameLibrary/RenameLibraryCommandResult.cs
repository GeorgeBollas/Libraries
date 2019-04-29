using Noter.Application.Infrastructure.Commanding;
using System;

namespace Noter.Application.Libraries.Commands.RenameLibrary
{
    public class RenameLibraryCommandResult : CommandResultBase
    {
        public RenameLibraryCommandResult(Guid requestGuid) : base(requestGuid) { }
    }
}