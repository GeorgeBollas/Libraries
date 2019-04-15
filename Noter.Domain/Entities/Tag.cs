using Noter.Domain.Enumerations;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Domain.Entities
{
    public class Tag: Auditable
    {

        public int Id { get; set; }

        public string Name { get; set; }

        public string Notes { get; set; }

        public bool IsPinned { get; set; }

        public int Sequence { get; set; }

        public int TagTypeId { get; set; }

        public TagType TagType { get; set; }

        public ICollection<ItemTag> ItemTags { get; set; }

    }
}
