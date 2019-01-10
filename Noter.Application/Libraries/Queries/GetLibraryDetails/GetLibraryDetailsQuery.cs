using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Libraries.Queries.GetLibraryDetails
{
    public class GetLibraryDetailsQuery:IRequest<LibraryDetailsViewModel>
    {
        public int LibraryId { get; set; }

        public bool IncludeRecentItems { get; set; }

        public int MaxItemCount { get; set; }

    }
}
