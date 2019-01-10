using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Domain.Exeptions
{
    public class InvalidItemTypeException: Exception
    {
        public InvalidItemTypeException(string itemType, Exception ex)
            : base($"Item Type \"{itemType}\" is invalid.", ex)
        {

        }
    }
}
