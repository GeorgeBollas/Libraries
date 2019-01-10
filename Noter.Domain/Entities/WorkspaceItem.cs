using Noter.Domain.Enumerations;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Domain.Entities
{
    public class WorkspaceItem: Auditable
    {
        public int Id { get; set; }

        public int WorkspaceId { get; set; }

        public int ItemId { get; set; }
        public int Sequence { get; set; }


        public Item Item { get; set; }

        public Workspace Workspace { get; set; }
    }
}
