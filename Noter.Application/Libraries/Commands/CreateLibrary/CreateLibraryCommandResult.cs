using System.Collections.Generic;

namespace Noter.Application.Libraries.Commands.CreateLibrary
{
    public class CreateLibraryCommandResult
    {
        public CreateLibraryCommandResult()
        {
            Messages = new List<string>();
        }
        public int LibraryId { get; set; }

        public IEnumerable<string> Messages { get; set; }
    }
}