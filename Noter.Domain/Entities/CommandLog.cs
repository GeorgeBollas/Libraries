using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Domain.Entities
{
    public class CommandLog: Auditable
    {
        public int Id { get; set; }
        public string Request { get; set; }
        public string Response { get; set; }

    }
}
