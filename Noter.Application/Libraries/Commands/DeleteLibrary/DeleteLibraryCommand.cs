using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Libraries.Commands.DeleteLibrary
{
    public class DeleteLibraryCommand: IRequest
    {
        public int LibraryId { get; set; }
        public bool DeleteItems { get; set; }

    }
}
