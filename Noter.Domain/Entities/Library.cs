using Noter.Domain.Enumerations;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Domain.Entities
{
    public class Library: Auditable
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string Notes { get; set; }

        public bool IsPinned { get; set; }

        public int Sequence { get; set; }

        public ICollection<LibraryTagType> LibraryTagTypes { get; set; } = new HashSet<LibraryTagType>();

        public ICollection<Item> Documents { get; set; }

        public const int MaxSeuquence = 1000000;
    }

}
