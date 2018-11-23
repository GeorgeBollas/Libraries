using Noter.Domain.Enumerations;
using Noter.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Domain.Entities
{
    public class Document: Auditable
    {
        public Document()
        {
            Tags = new HashSet<DocumentTag>();
        }

        public int Id { get; set; }
        public Guid Guid { get; set; }

        public string Title { get; set; }
        public string Notes { get; set; }

        public int CategoryId { get; set; }

        public DocumentType Type { get; set; }

        public string Context { get; set; }

        public Library Category { get; set; }

        public ICollection<DocumentTag> Tags { get; set; }

    }
}
