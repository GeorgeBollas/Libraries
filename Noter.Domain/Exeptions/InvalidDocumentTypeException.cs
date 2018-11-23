using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Domain.Exeptions
{
    public class InvalidDocumentTypeException: Exception
    {
        public InvalidDocumentTypeException(string documentType, Exception ex)
            : base($"Document Type \"{documentType}\" is invalid.", ex)
        {

        }
    }
}
