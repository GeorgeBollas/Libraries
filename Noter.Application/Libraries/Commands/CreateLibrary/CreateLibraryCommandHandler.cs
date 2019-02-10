using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Noter.Application.Exceptions;
using Noter.Application.Infrastructure.Commanding;
using Noter.Domain.Entities;
using Noter.Persistance;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Noter.Application.Libraries.Commands.CreateLibrary
{
    public class CreateLibraryCommandHandler : IRequestHandler<CreateLibraryCommand, CreateLibraryCommandResult>
    {
        private readonly NoterDbContext context;
        private readonly ILogger logger;
        private Library library;

        public CreateLibraryCommandHandler(NoterDbContext context, ILogger<CreateLibraryCommandHandler> logger)
        {
            this.context = context;
            this.logger = logger;
        }


        public async Task<CreateLibraryCommandResult> Handle(CreateLibraryCommand request, CancellationToken cancellationToken)
        {
            var result = new CreateLibraryCommandResult(request.RequestGuid)
            {
                RequestGuid = request.RequestGuid,
            };

            logger.LogDebug("CreateLibraryCommand {@value1}", request);

            try
            {

                CreateLibrary(request);

                CreateTags(request.Tags);

                await context.SaveChangesAsync(cancellationToken);

                result.LibraryId = library.Id;

                return result;
            }
            catch (DbUpdateException ex)
            {
                throw new ValidationException(new List<FluentValidation.Results.ValidationFailure>()
                {
                    new FluentValidation.Results.ValidationFailure("Name", "already exists")
                });
            }
            catch (Exception ex)
            {
                //todo change this to error notifier which calls logger and maybe notifies user/email etc or maybe an array of notifiers
                logger.LogError(ex, "CreateLibraryCommandHandler failed:{@value1}", request.RequestGuid);

                throw (ex);
            }
        }

        private void CreateLibrary(CreateLibraryCommand request)
        {
            TextInfo textInfo = CultureInfo.CurrentCulture.TextInfo;

            library = new Library
            {
                Guid = Guid.NewGuid(),
                Name = textInfo.ToTitleCase(request.Name.Trim()),
                Notes = request.Notes,
                EntityStatus = Domain.Enumerations.EntityStatus.Active,
                Created = DateTime.Now,
                Modified = DateTime.Now
            };

            context.Libraries.Add(library);
        }
        private void CreateTags(string[] tags)
        {
            TextInfo textInfo = CultureInfo.CurrentCulture.TextInfo;

            foreach (var tagName in tags.Select(t => t.Trim()).Distinct())
            {

                var name = textInfo.ToTitleCase(tagName.ToLower());

                var tag = new Tag()
                {
                    Name = name,
                    Guid = Guid.NewGuid(),
                    EntityStatus = Domain.Enumerations.EntityStatus.Active,
                    Created = DateTime.Now,
                    Modified = DateTime.Now,

                    Library = library
                };

                context.Tags.Add(tag);
            }
        }
    }
}
