using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Noter.Api.SignalR
{
    public class LibrariesHub: Hub<ILibrariesClient>
    {
        public LibrariesHub()
        {

        }

        public async Task SendMessage(string user, string message)
        {
            await Clients.All.ReceiveMessage(user, message);
        }

        public async Task SendLibraryCreatedNotification(int libraryId)
        {
            await Clients.All.NotifyLibraryCreated(libraryId);
        }
    }
}
