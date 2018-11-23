using Noter.Domain.Exeptions;
using Noter.Domain.Infrastructure;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Domain.ValueObjects
{
    public class DocumentType : ValueObject
    {
        private DocumentType()
        {
        }

        public DocumentType(string value)
        {
            try
            {
                var index = value.IndexOf("|", StringComparison.Ordinal);
                BaseType = value.Substring(0, index);
                Version = value.Substring(index + 1);
            }
            catch (Exception ex)
            {
                throw new InvalidDocumentTypeException(value, ex);
            }
        }

        public string BaseType { get; private set; }

        public string Version { get; private set; }

        public static implicit operator string(DocumentType documentType)
        {
            return documentType.ToString();
        }

        public static explicit operator DocumentType(string value)
        {
            return new DocumentType(value);
        }

        public override string ToString()
        {
            return $"{BaseType}|{Version}";
        }

        protected override IEnumerable<object> GetAtomicValues()
        {
            yield return BaseType;
            yield return Version;
        }
    }
}
