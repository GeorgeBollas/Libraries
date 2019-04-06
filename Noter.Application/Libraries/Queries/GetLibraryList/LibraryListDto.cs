using Noter.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace Noter.Application.Libraries.Queries.GetLibraryList
{
    public class LibraryListDto
    {
        public int LibraryId { get; set; }
        public string Name { get; set; }
        public bool IsActive { get; set; }
        public bool IsPinned { get; set; }

        public static Expression<Func<Library, LibraryListDto>> Projection
        {
            get
            {
                return l => new LibraryListDto
                {
                    LibraryId = l.Id,
                    Name = l.Name,
                    IsPinned = l.IsPinned,
                    IsActive = l.EntityStatus == Domain.Enumerations.EntityStatus.Active
                };
            }
        }

        public static LibraryListDto Create(Library library)
        {
            return Projection.Compile().Invoke(library);
        }
    }
}
