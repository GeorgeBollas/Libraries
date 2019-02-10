using FluentValidation.Results;
using Noter.Application.Infrastructure.Commanding;
using System;
using System.Linq;
using Xunit;

namespace Noter.Application.Tests.CommandingTests
{
    public class BasicValidatoTests
        : TestBase
    {

        [Fact]
        public void Validator_MustTestRequestIdIsNotEmpty()
        {
            // Arrange
            var tv = new TestValidator();

            // Act

            var results = tv.Validate(new TestCommand());

            var res = results.Errors;

            // Assert

            Assert.Equal(default(ValidationFailure), results.Errors.SingleOrDefault(e => e.ErrorMessage == "'Request Guid' should not be empty")) ;
        }
    }


    internal class TestCommandResult : CommandResultBase
    {
        public TestCommandResult(Guid requestGuid) : base(requestGuid)
        {

        }
    }

    internal class TestCommand : CommandRequestBase<TestCommandResult>
    {

    }

    internal class TestValidator : CommandValidatorBase<TestCommand>
    {
    }
}
