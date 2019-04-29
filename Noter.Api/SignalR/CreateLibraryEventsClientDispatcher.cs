using MediatR;
using Microsoft.AspNetCore.SignalR;
using Noter.Api.SignalR;
using Noter.Application.Libraries.Commands.CreateLibrary;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Noter.Api.SignalR
{
    public class CreateLibraryEventsClientDispatcher : INotificationHandler<LibraryCreatedEvent>
    {
        private readonly IHubContext<LibrariesHub, ILibrariesClient> hubContext;


        public CreateLibraryEventsClientDispatcher(IHubContext<LibrariesHub, ILibrariesClient> hubContext)
        {
            this.hubContext = hubContext;
        }

        public async Task Handle(LibraryCreatedEvent notification, CancellationToken cancellationToken)
        {
            //return hubContext.Clients.All.SendAsync("LibraryCreated", notification, cancellationToken);
            await hubContext.Clients.All.NotifyLibraryCreated(notification.LibraryId);
        }
    }
}
