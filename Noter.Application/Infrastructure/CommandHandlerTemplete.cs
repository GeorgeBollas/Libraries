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

namespace Noter.Application.$feature$.Commands.$itemname$
{
    public class $itemname$CommandHandler : IRequestHandler<$itemname$Command, $itemname$CommandResult>
    {
        private readonly NoterDbContext context;
        private readonly ILogger logger;
        private Library library;

        public $itemname$CommandHandler(NoterDbContext context, ILogger<$itemname$CommandHandler> logger)
        {
            this.context = context;
            this.logger = logger;
        }


        public async Task<$itemname$CommandResult> Handle($itemname$Command request, CancellationToken cancellationToken)
        {
            var result = new $itemname$CommandResult()
                    {
                        RequestGuid = request.RequestGuid
                    };


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
                logger.LogError(ex, "$itemname$CommandHandler failed:{@value1}", request.RequestGuid);

                throw (ex);
            }
        }
    }
}
