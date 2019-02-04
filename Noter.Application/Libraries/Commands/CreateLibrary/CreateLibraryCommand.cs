using MediatR;
using Noter.Application.Infrastructure;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Libraries.Commands.CreateLibrary
{
    public class CreateLibraryCommand: IRequest<CreateLibraryCommandResult>, ILoggedRequest
    {
        public Guid RequestGuid { get; set; }

        public string Name { get; set; }

        public string Notes { get; set; }


        public string[] Tags { get; set; }
    }
}
