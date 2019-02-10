using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Infrastructure.Commanding
{
    public enum CommandStatus
    {
        Succeeded = 0,
        ValidationFailed = 1,
        UnexpectedException =2
    }
}
