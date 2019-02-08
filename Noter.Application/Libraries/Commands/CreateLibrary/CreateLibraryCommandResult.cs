using Noter.Application.Infrastructure.Commanding;
using Noter.Application.Infrastructure.Validation;
using System;
using System.Collections.Generic;

namespace Noter.Application.Libraries.Commands.CreateLibrary
{
    public class CreateLibraryCommandResult: CommandResultBase
    {
        public CreateLibraryCommandResult(Guid requestGuid) : base(requestGuid) { }

        public int LibraryId { get; set; }

    }
}