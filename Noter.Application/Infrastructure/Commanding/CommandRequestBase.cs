using MediatR;
using Noter.Application.Infrastructure;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Infrastructure.Commanding
{
    public abstract class CommandRequestBase<T>: IRequest<T>, ILoggedRequest 
        where T: CommandResultBase
    {
        public Guid RequestGuid { get; set; }

    }
}
