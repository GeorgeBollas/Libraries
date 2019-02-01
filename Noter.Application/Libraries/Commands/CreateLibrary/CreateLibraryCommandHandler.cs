﻿using MediatR;
using Microsoft.Extensions.Logging;
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
            logger.LogDebug("CreateLibraryCommand {0}", request);
            try
            {
                //todo validate and set errors -- or done in CreateLibraryCommandValidator ?????

                CreateLibrary(request);

                CreateTags(request.Tags);

                await context.SaveChangesAsync(cancellationToken);
            }
            catch (Exception ex)
            {
                var guid = Guid.NewGuid();
                logger.LogError(ex, "CreateLibraryCommandHandler:{0}", guid);
                return new CreateLibraryCommandResult()
                {
                    LibraryId = library.Id,
                    Errors = new List<string>() { $"Create Library failed with unknown error\n Reference '{guid}" }
                };
            }

            return new CreateLibraryCommandResult() { LibraryId = library.Id };
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
        private void CreateTags(string tags, string separator = "|")
        {
            TextInfo textInfo = CultureInfo.CurrentCulture.TextInfo;

            var tagsArray = tags.Split(separator);

            foreach (var tagName in tagsArray)
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
