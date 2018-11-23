using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Libraries.Queries
{
    public class GetLibraryListQuery : IRequest<LibraryListViewModel>
    {
        public string NamePart { get; set; }
        public bool IncludeInactive { get; set; }

    }
}
