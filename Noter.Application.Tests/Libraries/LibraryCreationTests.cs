using Castle.Core.Logging;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.Extensions.Logging;
using Moq;
using Noter.Application.Exceptions;
using Noter.Application.Infrastructure.Commanding;
using Noter.Application.Libraries.Commands.CreateLibrary;
using Noter.Domain.Entities;
using Noter.Persistance;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Xunit;

namespace Noter.Application.Tests.Libraries
{
    public class LibraryCreationTests
        : TestBase
    {
        public LibraryCreationTests()
        {
        }

        //todo how do we test the pipeline eg validation, logging etc


        [Fact]
        public async Task CreateLibrary_ShouldReturnSameRequestId()
        {
            // Arrange

            var context = new Mock<NoterDbContext>(new DbContextOptions<NoterDbContext>());

            var logger = new Mock<ILogger<CreateLibraryCommandHandler>>();

            var commandHandler = new CreateLibraryCommandHandler(context.Object, logger.Object);

            var requestId = Guid.NewGuid();

            var command = new CreateLibraryCommand
            {
                RequestGuid = requestId,
                Name = "new library",
                Notes = "notes for new library",
                Tags = new string[] { "tag1", "tag2", "tag3" }
            };

            // Act

            var result = await commandHandler.Handle(command, CancellationToken.None);

            // Assert

            Assert.Equal(requestId, result.RequestGuid);

        }

        [Fact]
        public async Task CreateLibrary_VerifyCalls()
        {
            // Arrange

            var context = new Mock<NoterDbContext>(new DbContextOptions<NoterDbContext>());

            // d.Tags.Add is not virtual so this seems to work

            System.Linq.Expressions.Expression<Func<NoterDbContext, EntityEntry<Library>>> libraryCall = d => d.Add(It.IsAny<Library>());
            context.Setup(libraryCall).Verifiable("Library Add was not called");

            System.Linq.Expressions.Expression<Func<NoterDbContext, EntityEntry<Tag>>> tagsCall = d => d.Add(It.IsAny<Tag>());
            context.Setup(tagsCall).Verifiable("Tags Add was not called");

            var logger = new Mock<ILogger<CreateLibraryCommandHandler>>();

            var commandHandler = new CreateLibraryCommandHandler(context.Object, logger.Object);

            var requestId = Guid.NewGuid();

            var command = new CreateLibraryCommand
            {
                RequestGuid = requestId,
                Name = "new library",
                Notes = "notes for new library",
                Tags = new string[] { "tag1", "tag2", "tag3" }
            };

            // Act

            var result = await commandHandler.Handle(command, CancellationToken.None);

            // Assert

            context.Verify(libraryCall,Times.Exactly(1));
            context.Verify(tagsCall,Times.Exactly(3));

        }

        [Fact]
        public async Task CreateLibrary_DuplicateTagsRemoved()
        {
            // Arrange

            var context = new Mock<NoterDbContext>(new DbContextOptions<NoterDbContext>());

            // d.Tags.Add is not virtual so this seems to work

            System.Linq.Expressions.Expression<Func<NoterDbContext, EntityEntry<Tag>>> tagsCall = d => d.Add(It.IsAny<Tag>());
            context.Setup(tagsCall).Verifiable("Tags Add was not called");

            var logger = new Mock<ILogger<CreateLibraryCommandHandler>>();

            var commandHandler = new CreateLibraryCommandHandler(context.Object, logger.Object);

            var requestId = Guid.NewGuid();

            var command = new CreateLibraryCommand
            {
                RequestGuid = requestId,
                Name = "new library",
                Notes = "notes for new library",
                Tags = new string[] { "tag1", "tag2", "tag1", "tag2" }
            };

            // Act

            var result = await commandHandler.Handle(command, CancellationToken.None);

            // Assert

            context.Verify(tagsCall, Times.Exactly(2));
        }

        [Fact]
        public void CreateLibraryCommandValidator_ShouldCheckName()
        {
            // Arrange

            var validator = new CreateLibraryCommandValidator();
            var command = new CreateLibraryCommand() { RequestGuid = Guid.NewGuid() };


            // Act

            var errors = validator.Validate(command).Errors;

            // Assert

            Assert.NotNull(errors.FirstOrDefault(e => e.ErrorMessage == "Library name is required"));
        }

        [Fact]
        public async Task CreateLibrary_ThrowsValidationExeptionIfLibraryNameExistsInDB()
        {
            // Arrange

            var context = new Mock<NoterDbContext>(new DbContextOptions<NoterDbContext>());

            context.Setup(d => d.SaveChangesAsync(new CancellationToken())).Throws<DuplciateInsert>();

            var logger = new Mock<ILogger<CreateLibraryCommandHandler>>();

            var commandHandler = new CreateLibraryCommandHandler(context.Object, logger.Object);

            var requestId = Guid.NewGuid();

            var command = new CreateLibraryCommand
            {
                RequestGuid = requestId,
                Name = "new library",
                Notes = "notes for new library",
                Tags = new string[] { "tag1", "tag2", "tag3" }
            };

            // Act + Assert

            await Assert.ThrowsAsync<ValidationException>(async () => await commandHandler.Handle(command, CancellationToken.None));

        }
    }

    internal class DuplciateInsert: DbUpdateException
    {
        public DuplciateInsert():base("dup error", new ApplicationException())
        {

        }
    }


}
