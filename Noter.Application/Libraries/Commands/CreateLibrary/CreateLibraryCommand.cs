using Noter.Application.Infrastructure.Commanding;

namespace Noter.Application.Libraries.Commands.CreateLibrary
{
    public class CreateLibraryCommand: CommandRequestBase<CreateLibraryCommandResult>
    {

        public string Name { get; set; }

        public string Description { get; set; }
    }
}
