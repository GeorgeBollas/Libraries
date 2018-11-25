using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Noter.Application.Libraries.Commands.UpdateLibrary
{
    public class UpdateLibraryCommandHandler : IRequestHandler<UpdateLibraryCommand>
    {
        public Task<Unit> Handle(UpdateLibraryCommand request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
