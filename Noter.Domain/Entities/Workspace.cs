using Noter.Domain.Enumerations;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Domain.Entities
{
    public class Workspace: Auditable
    {
        public Workspace()
        {
            Items = new HashSet<WorkspaceItem>();
        }

        public int Id { get; set; }

        public string Title { get; set; }
        public string Notes { get; set; }

        public string Context { get; set; }

        public ICollection<WorkspaceItem> Items { get; set; }

    }
}
