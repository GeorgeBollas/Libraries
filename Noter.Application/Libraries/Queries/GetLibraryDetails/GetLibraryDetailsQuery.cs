using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Libraries.Queries.GetLibraryDetails
{
    public class GetLibraryDetailsQuery:IRequest<LibraryDetailsViewModel>
    {
        public int LibraryId { get; set; }

        public bool IncludeRecentDocuments { get; set; }
        public int MaxDocumentCount { get; set; }

    }
}
