using Noter.Domain.Enumerations;
using Noter.Domain.Infrastructure;
using Noter.Infrastructure;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Domain.Entities
{
    public class Tag: Auditable, IPinnable
    {

        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string Notes { get; set; }

        public bool IsPinned { get; set; }

        public int Sequence { get; set; }

        public int TagTypeId { get; set; }

        public TagType TagType { get; set; }

        public ICollection<ItemTag> ItemTags { get; set; }

    }
}
