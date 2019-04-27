using FluentValidation;
using MediatR;
using Noter.Application.Infrastructure;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Infrastructure.Commanding
{
    public abstract class CommandValidatorBase<T>: AbstractValidator<T> where  T: IRequest<CommandResultBase>, ILoggedRequest //todo why are we using ILoggedRequest here
    {
        public CommandValidatorBase()
        {
            RuleFor(n => n.RequestGuid).NotEmpty();
        }
    }
}
