using Noter.Application.Infrastructure.Commanding;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Libraries.Commands.ToggleLibraryPin
{
    public class ToggleLibraryPinCommand : CommandRequestBase<ToggleLibraryPinCommandResult>
    {
        public int LibraryId { get; set; }
        public int Sequence { get; set; }
        public bool IsPinned { get; set; }
    }
}
