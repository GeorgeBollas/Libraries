using MediatR;
using Noter.Application.Infrastructure;
using Noter.Application.Infrastructure.Commanding;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Libraries.Commands.CreateLibrary
{
    public class CreateLibraryCommand: CommandRequestBase<CreateLibraryCommandResult>
    {

        public string Name { get; set; }

        public string Notes { get; set; }

        public string[] Tags { get; set; }
    }
}
