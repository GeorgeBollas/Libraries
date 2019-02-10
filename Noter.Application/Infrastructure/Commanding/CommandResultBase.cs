using Noter.Application.Infrastructure.Validation;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Infrastructure.Commanding
{

    public abstract class CommandResultBase
    {
        public CommandResultBase(Guid requestGuid)
        {
            RequestGuid = requestGuid;
        }

        public Guid RequestGuid { get; set; }
    }
}
