using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Services
{
    public interface IMessageBuilder
    {
        string GenRequired(string filedName);
        string GenMaxLen(string filedName, int maxLen);
    }
}
