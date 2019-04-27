using MediatR;

namespace Noter.Application.Libraries.Commands.CreateLibrary
{
    public class LibraryCreatedEvent : INotification
    {
        public LibraryCreatedEvent()
        {
        }

        public int LibraryId { get; set; }
    }
}