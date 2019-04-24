using Noter.Application.Infrastructure.Commanding;

namespace Noter.Application.Libraries.Commands.RenameLibrary
{
    public class RenameLibraryCommand : CommandRequestBase<RenameLibraryCommandResult>
    {
        public int LIbraryId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }
    }
}