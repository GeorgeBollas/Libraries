using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Noter.Api.SignalR
{
    public class LibrariesHub: Hub<ILibrariesClient>
    {
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.ReceiveMessage(user, message);
        }
    }
}
