using Microsoft.Extensions.Logging;
using Noter.Application.Libraries.Commands;
using Noter.Domain.Entities;
using Noter.Persistance;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Items.Commands.CreateItem
{

    public class CreateItemCommandHandler : EntityCommandHandlerBase<CreateItemCommand, CreateItemCommandResult, Item>
    {
        public CreateItemCommandHandler(NoterDbContext context, ILogger logger) : base(context, logger) { }

        public override void BuildEntity()
        {
            entity.Title = request.Title;
        }

        public override void ProcessResult()
        {
            result.ItemId = entity.Id;
        }
    }
}
