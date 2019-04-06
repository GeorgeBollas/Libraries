using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Libraries.Queries.GetLibraryList
{
    public class GetLibraryListQuery : IRequest<LibraryListViewModel>
    {
        public string NamePart { get; set; }

        public bool PinnedFirst { get; set; }

        public bool IncludeInactive { get; set; }

    }
}
