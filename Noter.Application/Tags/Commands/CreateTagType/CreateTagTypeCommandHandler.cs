﻿using MediatR;
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

namespace Noter.Application.Tags.Commands.CreateTagType
{
    public class CreateTagTypeCommandHandler : IRequestHandler<CreateTagTypeCommand, CreateTagTypeCommandResult>
    {
        private readonly NoterDbContext context;
        private readonly ILogger logger;

        public CreateTagTypeCommandHandler(NoterDbContext context, ILogger<CreateTagTypeCommandHandler> logger)
        {
            this.context = context;
            this.logger = logger;
        }


        public async Task<CreateTagTypeCommandResult> Handle(CreateTagTypeCommand request, CancellationToken cancellationToken)
        {
            var result = new CreateTagTypeCommandResult(request.RequestGuid);

            try
            {

                //setup
                var tagType = new TagType()
                {
                    Name = request.Name,
                    Description = request.Description
                };

                context.TagTypes.Add(tagType);

                await context.SaveChangesAsync(cancellationToken);

                // set result;
                result.TagTypeId = tagType.Id;

                return result;
            }
            catch (Exception ex)
            {
                //todo change this to error notifier which calls logger and maybe notifies user/email etc or maybe an array of notifiers
                logger.LogError(ex, "CreateTagTypeCommandHandler failed:{@value1}", request.RequestGuid);

                throw (ex);
            }
        }
    }
}
