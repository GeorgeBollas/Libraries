using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Domain.Entities
{
    public class Collection:Auditable
    {
        public Collection()
        {
            Items = new List<CollectionItem>();
        }

        public int Id { get; set; }

        public string Name { get; set; }

        public int LibraryId { get; set; }

        public Library Library { get; set; }

        public ICollection<CollectionItem> Items { get; set; }

    }
}
