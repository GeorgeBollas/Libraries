using Microsoft.Extensions.Logging;
using Noter.Domain.Entities;
using Noter.Persistance;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Text;

namespace Noter.Application.Libraries.Commands.CreateLibrary
{
    public class CreateLibraryCommandHandler : EntityCommandHandlerBase<CreateLibraryCommand, CreateLibraryCommandResult, Library>
    {
        public CreateLibraryCommandHandler(NoterDbContext context, ILogger logger) : base(context, logger) { }

        public override void BuildEntity()
        {
            TextInfo textInfo = CultureInfo.CurrentCulture.TextInfo;

            entity = new Library
            {
                Guid = Guid.NewGuid(),
                Name = textInfo.ToTitleCase(request.Name.Trim()),
                Notes = request.Notes,
                EntityStatus = Domain.Enumerations.EntityStatus.Active,
                Created = DateTime.Now,
                Modified = DateTime.Now,
                IsPinned = false,
                Sequence = Library.MaxSeuquence
            };

            context.Libraries.Add(entity);
        }

        public override void ProcessResult()
        {
            result.LibraryId = entity.Id;
        }
    }
}
