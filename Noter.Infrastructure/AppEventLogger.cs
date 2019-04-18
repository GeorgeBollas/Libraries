using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Noter.Domain.Entities;
using Noter.Persistance;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Noter.Infrastructure
{
    public class AppEventLogger : IAppEventLogger
    {
        private readonly NoterDbContext context;

        public AppEventLogger(NoterDbContext context)
        {
            this.context = context;
        }

        public async Task LogCommand(string command, object request, object response)
        {
            var appEvent = new AppEvent()
            {
                EventCategory = EventCategory.Command,
                EventTime = DateTime.Now,
                EventJson = JsonConvert.SerializeObject(new { request, response })
            };

            context.AppEvents.Add(appEvent);
            await context.SaveChangesAsync();

        }

        public void LogAppStarting() { }

        public void LogAppStopping() { }

        public void LogAppError(string message, Exception ex) { }
    }
}
