using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Infrastructure
{
    public interface ILoggedRequest
    {
        Guid RequestGuid { get; set; }
    }
}
