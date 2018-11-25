using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Libraries.Queries.GetLibraryDetails
{
    public class LibraryDetailsTagDto
    {
        public int TagId { get; set; }
        public string Name { get; set; }

        public int DocumentCount { get; set; }

    }
}
