using MediatR;
using Microsoft.Extensions.Logging;
using Noter.Application.Infrastructure.Commanding;
using Noter.Domain.Entities;
using Noter.Persistance;
using System;
using System.Collections.Generic;
using System.Globalization;
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
                Status = CommandStatus.Succeeded, //todo not needed as it is default but should explicitly 
            };

            logger.LogDebug("CreateLibraryCommand {@value1}", request);

            try
            {
                //todo validate and set errors -- or done in CreateLibraryCommandValidator ?????

                CreateLibrary(request);

                CreateTags(request.Tags);

                await context.SaveChangesAsync(cancellationToken);

                result.LibraryId = library.Id;

                return result;
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "CreateLibraryCommandHandler:{@value1}", request.RequestGuid);

                result.Status = CommandStatus.Failed;

                result.Errors.Add($"Create Library failed with unknown error\n Reference '{request.RequestGuid}");

                return result;
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

            foreach (var tagName in tags)
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
