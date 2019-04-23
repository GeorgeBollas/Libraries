using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Infrastructure
{
    public class AppEventLogger
    {
        public void LogCommand() { }

        public void LogAppStarting() { }

        public void LogAppStopping() { }

        public void LogAppError(string message, Exception ex) { }
    }
}
