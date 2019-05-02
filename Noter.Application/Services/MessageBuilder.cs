using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Services
{
    public class MessageBuilder : IMessageBuilder
    {
        public string GenMaxLen(string filedName, int maxLen)
        {
            return $"{filedName} has maximum length of {maxLen}";
        }

        public string GenRequired(string filedName)
        {
            return $"{filedName} is required";
        }
    }
}
