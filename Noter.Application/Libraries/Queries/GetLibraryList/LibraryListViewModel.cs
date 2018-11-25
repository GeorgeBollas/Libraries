using System;
using System.Collections;
using System.Collections.Generic;

namespace Noter.Application.Libraries.Queries.GetLibraryList
{
    public class LibraryListViewModel
    {
        public IEnumerable<LibraryListDto> Libraries { get; set; }
    }
}