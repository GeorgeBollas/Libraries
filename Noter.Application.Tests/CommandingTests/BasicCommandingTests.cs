using MediatR;
using Noter.Application.Infrastructure;
using Noter.Application.Infrastructure.Commanding;
using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace Noter.Application.Tests.CommandingTests
{
    public class BasicCommandingTests
        : TestBase

    {
        public BasicCommandingTests()
        {
        }

        [Fact]
        public void CommandRequestBase_ShouldNotInitRequestId()
        {
            // Arrange

            var command = new TestCommand();

            // Assert

            Assert.Equal(command.RequestGuid, Guid.Empty);
        }

        [Fact]
        public void CommandRequestBase_MustImplementILoggedRequest()
        {
            // Assert

            Assert.IsAssignableFrom<ILoggedRequest>(new TestCommand());
            Assert.IsAssignableFrom<IRequest<TestCommandResult>>(new TestCommand());
        }

        [Fact]
        public void CommandResultBase_MustHaveInitialValues()
        {
            // Arrange
            var guid = Guid.NewGuid();

            var command = new TestCommandResult(guid);

            // Assert

            Assert.Equal(guid, command.RequestGuid);

        }

    }

}
