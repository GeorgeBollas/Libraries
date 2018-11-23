using Noter.Domain.Enumerations;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Domain.Entities
{
    public class Tag: Auditable
    {

        public int Id { get; set; }

        public int LibraryId { get; set; }

        public bool IsQuickPick { get; set; }
        public int Sequence { get; set; }

        public string Name { get; set; }
        public string Notes { get; set; }


        public Library Library { get; set; }
    }
}
