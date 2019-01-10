using Noter.Domain.Exeptions;
using Noter.Domain.Infrastructure;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Domain.ValueObjects
{
    public class ItemType : ValueObject
    {
        private ItemType()
        {
        }

        public ItemType(string value)
        {
            try
            {
                var index = value.IndexOf("|", StringComparison.Ordinal);
                BaseType = value.Substring(0, index);
                Version = value.Substring(index + 1);
            }
            catch (Exception ex)
            {
                throw new InvalidItemTypeException(value, ex);
            }
        }

        public string BaseType { get; private set; }

        public string Version { get; private set; }

        public static implicit operator string(ItemType itemType)
        {
            return itemType.ToString();
        }

        public static explicit operator ItemType(string value)
        {
            return new ItemType(value);
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
