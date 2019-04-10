using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Domain.Entities
{
    public class ItemContentType: Auditable
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string Notes { get; set; }

    }
}
