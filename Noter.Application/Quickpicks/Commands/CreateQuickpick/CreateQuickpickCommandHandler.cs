using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Noter.Application.Exceptions;
using Noter.Domain.Entities;
using Noter.Persistance;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Noter.Application.Quickpicks.Commands.CreateQuickpick
{
    public class CreateQuickpickCommandHandler : IRequestHandler<CreateQuickpickCommand, CreateQuickpickCommandResult>
    {
        private readonly NoterDbContext context;
        private readonly ILogger logger;
        private Library library;

        public CreateQuickpickCommandHandler(NoterDbContext context, ILogger<CreateQuickpickCommandHandler> logger)
        {
            this.context = context;
            this.logger = logger;
        }


        public async Task<CreateQuickpickCommandResult> Handle(CreateQuickpickCommand request, CancellationToken cancellationToken)
        {
            var result = new CreateQuickpickCommandResult(request.RequestGuid);

            try
            {

                //setup

                await context.SaveChangesAsync(cancellationToken);

                // set result;

                return result;
            }
            catch (Exception ex)
            {
                //todo change this to error notifier which calls logger and maybe notifies user/email etc or maybe an array of notifiers
                logger.LogError(ex, "CreateQuickpickCommandHandler failed:{@value1}", request.RequestGuid);

                throw (ex);
            }
        }
    }
}
