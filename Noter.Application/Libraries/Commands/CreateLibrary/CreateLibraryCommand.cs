using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Libraries.Commands.CreateLibrary
{
    public class CreateLibraryCommand: IRequest
    {
        public CreateLibraryCommand()
        {
            Tags = new List<string>();
        }
        public string Name { get; set; }
        public string Notes { get; set; }
        public ICollection<string> Tags { get; set; }
    }
}
