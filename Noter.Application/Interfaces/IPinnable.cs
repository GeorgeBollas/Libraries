using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Interfaces
{
    public interface IPinnable
    {
        bool IsPinned { get; set; }
        int Sequence { get; set; }
    }
}
