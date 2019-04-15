using Noter.Application.Infrastructure.Commanding;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Items.Commands.CreateItem
{
    public class CreateItemCommandResult: CommandResultBase
    {

        public int ItemId { get; set; }
    }
}
