using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Domain.Entities
{
    public class LibraryTagType: Auditable
    {
        public int LibraryId { get; set; }

        public int TagTypeId { get; set; }

        public int Sequence { get; set; }

        public Library Library { get; set; }

        public TagType TagType { get; set; }
    }
}
