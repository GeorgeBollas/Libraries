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
        public string Notes { get; set; }

        public ICollection<Tag> Tags { get; set; } = new HashSet<Tag>();

        public ICollection<Item> Documents { get; set; }

    }
}
