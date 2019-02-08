using MediatR;
using Noter.Application.Infrastructure.Commanding;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Libraries.Commands.UpdateLibrary
{
    public class UpdateLibraryCommand: CommandRequestBase<UpdateLibraryCommandResult>
    {
        public int LibraryId { get; set; }
        public string Name { get; set; }
        public string Notes { get; set; }

    }
}
