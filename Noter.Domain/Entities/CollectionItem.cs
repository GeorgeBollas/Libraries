using System;
using System.Text;

namespace Noter.Domain.Entities
{
    public class CollectionItem: Auditable
    {
        public int CollectionId { get; set; }

        public int ItemId { get; set; }

        public int Sequence { get; set; }

        public Collection Collection { get; set; }
    }
}
