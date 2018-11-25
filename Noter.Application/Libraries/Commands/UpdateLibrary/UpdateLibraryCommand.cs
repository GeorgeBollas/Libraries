using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Libraries.Commands.UpdateLibrary
{
    public class UpdateLibraryCommand: IRequest
    {
        public int LibraryId { get; set; }
        public string Name { get; set; }
        public string Notes { get; set; }

    }
}
