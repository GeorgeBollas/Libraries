using Noter.Application.Libraries.Commands.CreateLibrary;
using Noter.Domain.Entities;
using Noter.Persistance;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Xunit;

namespace Noter.Application.Tests.Libraries
{
    public class LibraryCreationTests
        : TestBase, IDisposable
    {
        private readonly NoterDbContext _context;
        public readonly CreateLibraryCommandHandler _commandHandler;

        public LibraryCreationTests()
        {
            _context = InitAndGetDbContext();
            _commandHandler = new CreateLibraryCommandHandler(_context, null);
        }

        [Fact]
        public Task ShouldNotAllowDuplicateTags()
        {
            // Arrange
            var command = new CreateLibraryCommand
            {
                Name = "new library",
                Notes = "notes for new library",
                Tags = "tag1|tag2|tag3"
            };

            // Act + Assert
            return Assert.ThrowsAsync<ArgumentException>(() =>
                _commandHandler.Handle(command, CancellationToken.None));

        }

        private NoterDbContext InitAndGetDbContext()
        {
            //var context = GetDbContext(useSqlLite: true);
            var context = GetDbContext();

            context.Libraries.Add(new Library
            {
                Name = "Test Library"
            });
            context.SaveChanges();

            return context;
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
