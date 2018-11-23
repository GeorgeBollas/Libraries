using Noter.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace Noter.Application.Libraries.Queries
{
    public class LibraryDto
    {
        public int LibraryId { get; set; }
        public string Name { get; set; }
        public bool IsActive { get; set; }

        public static Expression<Func<Library, LibraryDto>> Projection
        {
            get
            {
                return l => new LibraryDto
                {
                    LibraryId = l.Id,
                    Name = l.Name,
                    IsActive = l.EntityStatus == Domain.Enumerations.EntityStatus.Active
                };
            }
        }

        public static LibraryDto Create(Library library)
        {
            return Projection.Compile().Invoke(library);
        }
    }
}
