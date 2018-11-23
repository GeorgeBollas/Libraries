using Noter.Domain.Enumerations;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Domain.Entities
{
    public class Auditable
    {
        public Guid Guid { get; set; }

        public DateTime Created { get; set; }
        public DateTime Modified { get; set; }

        public EntityStatus EntityStatus { get; set; } = EntityStatus.New;

        public void InitDates()
        {
            DateTime now = DateTime.Now;
            Created = now;
            Modified = now;
        }
    }
}
