using System;
using System.Threading.Tasks;

namespace Noter.Infrastructure
{
    public interface IAppEventLogger
    {
        void LogAppError(string message, Exception ex);

        void LogAppStarting();

        void LogAppStopping();

        Task LogCommand(string command, object request, object response);

    }
}