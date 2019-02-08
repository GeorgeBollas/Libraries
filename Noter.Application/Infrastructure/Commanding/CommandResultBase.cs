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
            this.Status = CommandStatus.Succeeded;

            FieldErrors = new List<FieldError>();
            Errors = new List<string>();

        }
        public Guid RequestGuid { get; set; }

        public CommandStatus Status { get; set; }

        public IList<string> Errors { get; set; }
        public IList<FieldError> FieldErrors { get; set; }

    }
}
