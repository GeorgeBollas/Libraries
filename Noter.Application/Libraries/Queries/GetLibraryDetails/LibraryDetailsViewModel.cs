﻿using System.Collections.Generic;

namespace Noter.Application.Libraries.Queries.GetLibraryDetails
{
    public class LibraryDetailsViewModel
    {
        public LibraryDetailsViewModel()
        {
            Tags = new List<LibraryDetailsTagDto>();
        }
        
        public int LibraryId { get; set; }
        public string Name { get; set; }
        public string Notes { get; set; }

        public IEnumerable<LibraryDetailsTagDto> Tags { get; set; }

        public int DocumentCount { get; set; }

        public IEnumerable<LibraryDetailsDocumentDto> RecentDocuments { get; set; }

        public bool IsEditable { get; set; }
    }
}