using System.Collections.Generic;

namespace Noter.Application.Libraries.Queries.GetLibraryDetails
{
    public class LibraryDetailsViewModel
    {
        public LibraryDetailsViewModel()
        {
            TagTypes = new List<LibraryDetailsTagTypeDto>();
        }
        
        public int LibraryId { get; set; }

        public string Name { get; set; }

        public string Notes { get; set; }

        public IEnumerable<LibraryDetailsTagTypeDto> TagTypes { get; set; }

        public int ItemCount { get; set; }

        public IEnumerable<LibraryDetailsItemDto> RecentItems { get; set; }

        public bool IsEditable { get; set; }
    }
}