using Noter.Domain.Enumerations;
using Noter.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Domain.Entities
{
    public class Item: Auditable
    {
        public Item()
        {
            ItemTags = new HashSet<ItemTag>();
        }
        public int Id { get; set; }

        public string Title { get; set; }
        public string Notes { get; set; }

        public int LibraryId { get; set; }

        public ItemType Type { get; set; }

        public string Context { get; set; }

        public Library Library { get; set; }

        public ICollection<ItemTag> ItemTags { get; set; }

    }
}
