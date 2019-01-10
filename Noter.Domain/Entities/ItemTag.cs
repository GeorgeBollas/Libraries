using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Domain.Entities
{
    public class ItemTag
    {
        public int ItemId { get; set; }
        public int TagId { get; set; }

        public Item Item { get; set; }
        public Tag Tag { get; set; }
    }
}
