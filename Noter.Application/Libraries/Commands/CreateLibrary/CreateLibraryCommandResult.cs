using Noter.Application.Infrastructure.Validation;
using System.Collections.Generic;

namespace Noter.Application.Libraries.Commands.CreateLibrary
{
    public class CreateLibraryCommandResult
    {
        public CreateLibraryCommandResult()
        {
            FieldErrors = new List<FieldError>();
            Errors = new List<string>();
        }
        public int LibraryId { get; set; }

        public IEnumerable<string> Errors { get; set; }
        public IEnumerable<FieldError> FieldErrors { get; set; }
    }
}