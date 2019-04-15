using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Noter.Application.Exceptions;
using Noter.Application.Infrastructure.Commanding;
using Noter.Domain.Entities;
using Noter.Persistance;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Noter.Application.Libraries.Commands
{
    public abstract class EntityCommandHandlerBase<TRequest,TResult, TEntity> : IRequestHandler<TRequest, TResult>
        where TRequest : CommandRequestBase<TResult>
        where TResult : CommandResultBase, new()
        where TEntity : new()
    {
        protected readonly NoterDbContext context;
        protected readonly ILogger logger;

        protected TRequest request;

        protected TResult result;

        protected TEntity entity { get; set; }

        public EntityCommandHandlerBase(NoterDbContext context, ILogger logger)
        {
            this.context = context ?? throw new ArgumentNullException(nameof(context));
            this.logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }

        public async Task<TResult> Handle(TRequest request, CancellationToken cancellationToken)
        {
            this.request = request;

            result = new TResult
            {
                RequestGuid = request.RequestGuid
            };

            logger.LogDebug("EntityCommandHandlerBase {@value1}", request);

            try
            {
                entity = new TEntity();

                BuildEntity();

                await context.SaveChangesAsync(cancellationToken);

                ProcessResult();

                return result;
            }
            catch (Exception ex)
            {
                throw HandleException(ex);
                //todo change this to error notifier which calls logger and maybe notifies user/email etc or maybe an array of notifiers
                throw (ex);
            }
        }

        public abstract void BuildEntity();

        public abstract void ProcessResult();


        public virtual Exception HandleException(Exception exception)
        {
            logger.LogError(exception, "EntityCommandHandlerBase failed:{@value1}", request.RequestGuid);

            if (exception is DbUpdateConcurrencyException concurrencyEx)
            {
                // A custom exception of yours for concurrency issues
                throw new DBConcurrencyException();
            }
            else if (exception is DbUpdateException dbUpdateEx)
            {
                if (dbUpdateEx.InnerException != null
                        && dbUpdateEx.InnerException.InnerException != null)
                {
                    if (dbUpdateEx.InnerException.InnerException is SqlException sqlException)
                    {
                        switch (sqlException.Number)
                        {
                            case 2627:  // Unique constraint error
                            case 547:   // Constraint check violation
                            case 2601:  // Duplicated key row error
                                        // Constraint violation exception
                                        // A custom exception of yours for concurrency issues
                                return new ValidationException(new List<FluentValidation.Results.ValidationFailure>()
                                    {
                                    //todo get the name of the property for the constraint
                                        new FluentValidation.Results.ValidationFailure("Name", "already exists") //todo this is wrong make generic
                                    });
                            default:
                                // A custom exception of yours for other DB issues
                                return exception;
                        }
                    }

                    return exception;
                }
            }

            return exception;

        }
    }
}
