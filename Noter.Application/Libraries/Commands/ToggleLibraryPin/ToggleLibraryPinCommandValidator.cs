using FluentValidation;
using Noter.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Libraries.Commands.ToggleLibraryPin
{
    public class ToggleLibraryPinCommandValidator : AbstractValidator<ToggleLibraryPinCommand>
    {
        public ToggleLibraryPinCommandValidator()
        {
            RuleFor(v => v.Sequence)
                .GreaterThanOrEqualTo(0)
                .LessThan(Library.MaxSeuquence);
        }
    }
}