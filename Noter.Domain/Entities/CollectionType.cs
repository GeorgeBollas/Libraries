using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Domain.Entities
{
    public class CollectionType: Auditable
    {
        public string Name { get; set; }

        public bool OwnsDocuments { get; set; }

        public bool ShowDocumentOnlyInCollection { get; set; }


    }
}
