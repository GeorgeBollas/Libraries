using System.Threading.Tasks;

namespace Noter.Api.SignalR
{
    public interface ILibrariesClient
    {
        Task ReceiveMessage(string user, string message);

        Task ReceiveMessage(string message);

        Task NotifyLibraryCreated(int libraryId);

    }
}