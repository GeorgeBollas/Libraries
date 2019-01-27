using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Libraries.Commands.CreateLibrary
{
    public class CreateLibraryCommand: IRequest<CreateLibraryCommandResult>
    {
        public string Name { get; set; }

        public string Notes { get; set; }

        public string TagSeparator { get; set; }

        public string Tags { get; set; }
    }
}
