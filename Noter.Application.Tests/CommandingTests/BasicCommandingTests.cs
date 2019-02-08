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
        public void CommandRequestBaseShouldNotInitRequestId()
        {
            // Arrange
            var command = new TestCommand();

            // Assert
            Assert.Equal(command.RequestGuid, Guid.Empty);
        }

        [Fact]
        public void CommandRequestBaseMustHaveILoggedRequest()
        {
            // Assert
            Assert.IsAssignableFrom<ILoggedRequest>(new TestCommand());
            Assert.IsAssignableFrom<IRequest<TestCommandResult>>(new TestCommand());
        }

        [Fact]
        public void CommandResultBaseInitialValues()
        {
            // Arrange
            var command = new TestCommandResult(Guid.NewGuid());

            // Assert
            Assert.Equal(CommandStatus.Succeeded, command.Status);

        }

    }

}
