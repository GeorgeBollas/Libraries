using System.Threading.Tasks;

namespace Noter.Api.Hubs
{
    public interface ILibrariesClient
    {
        Task ReceiveMessage(string user, string message);
        Task ReceiveMessage(string message);
    }
}