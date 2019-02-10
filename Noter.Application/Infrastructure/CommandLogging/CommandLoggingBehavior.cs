using FluentValidation;
using MediatR;
using MediatR.Pipeline;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Noter.Domain.Entities;
using Noter.Persistance;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Noter.Application.Infrastructure.CommandLogging
{
    public class CommandLoggingPipeline<TRequest, TResponse> : IRequestPostProcessor<TRequest, TResponse>
    {
        private readonly NoterDbContext context;
        private readonly ILogger logger;

        public CommandLoggingPipeline(NoterDbContext context, ILogger<CommandLoggingPipeline<TRequest, TResponse>> logger)
        {
            this.context = context;
            this.logger = logger;
        }

        public Task Process(TRequest request, TResponse response)
        {
            //todo why is this required cant use ILoggingRequest:IRequest ???? why does it not work
            //todo can we add by reflection??
            if (request is ILoggedRequest)
            {
                var cl = new CommandLog()
                {
                    Guid = ((ILoggedRequest)request).RequestGuid,
                    Command = request.GetType().ToString(),
                    Request = JsonConvert.SerializeObject(request),
                    Response = JsonConvert.SerializeObject(response)
                };

                cl.InitDates();

                context.CommandLogs.Add(cl);
                context.SaveChanges();

            }

            return Task.FromResult(0);

        }
    }
}
