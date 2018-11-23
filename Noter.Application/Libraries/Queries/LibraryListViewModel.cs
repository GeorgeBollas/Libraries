using System;
using System.Collections;
using System.Collections.Generic;

namespace Noter.Application.Libraries.Queries
{
    public class LibraryListViewModel
    {
        public IEnumerable<LibraryDto> Libraries { get; set; }
    }
}