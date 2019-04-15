using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Infrastructure.Commanding
{
    public abstract class EntityCommandResultBase: CommandResultBase
    {
        public EntityCommandResultBase(Guid requestId):base(requestId)
        {

        }

        public int Id { get; set; }
    }
}
