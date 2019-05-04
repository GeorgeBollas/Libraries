using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Domain.Infrastructure
{
    public interface IPinnable
    {
        bool IsPinned { get; set; }
        int Sequence { get; set; }
    }
}
