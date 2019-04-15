using Noter.Application.Infrastructure.Commanding;
using System;

namespace Noter.Application.Libraries.Commands.CreateLibrary
{
    public class CreateLibraryCommandResult: CommandResultBase
    {

        public int LibraryId { get; set; }

    }
}