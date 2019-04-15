using Noter.Application.Infrastructure.Commanding;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Items.Commands.CreateItem
{
    public class CreateItemCommand: CommandRequestBase<CreateItemCommandResult>
    {
        public string Title { get; set; }
    }
}
