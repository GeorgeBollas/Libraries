using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Domain.Entities
{
    public class Quickpick:Auditable
    {
        public int Id { get; set; }

        public QuickpickType Type { get; set; }

        public string Name { get; set; }

        public string Context { get; set; }

        public int Sequence { get; set; }

    }

    public enum QuickpickType
    {
        Library = 0,
        Item =2,
    }
}
