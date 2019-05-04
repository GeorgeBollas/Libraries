using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Noter.Application.Exceptions;
using Noter.Application.Infrastructure;
using Noter.Domain.Entities;
using Noter.Infrastructure;
using Noter.Persistance;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Noter.Application.Tags.Commands.CreateTag
{
    public class CreateTagCommandHandler : IRequestHandler<CreateTagCommand, CreateTagCommandResult>
    {
        private readonly NoterDbContext context;
        private readonly ILogger logger;

        public CreateTagCommandHandler(NoterDbContext context, ILogger<CreateTagCommandHandler> logger)
        {
            this.context = context;
            this.logger = logger;
        }


        public async Task<CreateTagCommandResult> Handle(CreateTagCommand request, CancellationToken cancellationToken)
        {
            var result = new CreateTagCommandResult(request.RequestGuid);

            try
            {
                var pinned = context.Tags.
                    Where(t => t.TagTypeId == request.TagTypeId)
                    .OrderBy(t => t.Sequence)
                    .ThenBy(t => t.Name);

                //setup
                var tag = new Tag()
                {
                    Name = request.Name,
                    Description = request.Description,
                    IsPinned = request.IsPinned
                };


                if (request.IsPinned)
                    PinnableHelper.Pin(pinned.ToList(), tag);

                await context.SaveChangesAsync(cancellationToken);

                // set result;
                result.TagId = tag.Id;

                return result;
            }
            catch (Exception ex)
            {
                //todo change this to error notifier which calls logger and maybe notifies user/email etc or maybe an array of notifiers
                logger.LogError(ex, "CreateTagCommandHandler failed:{@value1}", request.RequestGuid);

                throw (ex);
            }
        }
    }
}
