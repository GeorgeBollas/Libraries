using Noter.Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Noter.Application.Infrastructure
{
    public static class PinnableHelper
    {
        public const int MAX_SEQUENCE = 10000000;

        // where should we drop an item index not sequence
        // what if they have same name then how do we drop in right spot



        /// <summary>
        /// Pin the new item
        /// </summary>
        /// <param name="list">The list ordered list of pinned items</param>
        /// <param name="item">the item to be pinned</param>
        /// <returns>all items that have had their sequence changed, including the new item</returns>
        public static IEnumerable<IPinnable> Pin<IPinnable>(List<IPinnable> list, IPinnable item, int index) where IPinnable : Interfaces.IPinnable, IEquatable<IPinnable>
        {
            list.Remove(item);

            if (index > list.Count)
                throw new ArgumentOutOfRangeException();

            list.Insert(index, item); //will append if = count

            var newIndex = 0;

            foreach (var i in list)
            {
                if (i.Sequence != newIndex || i.Equals( item))
                {
                    i.Sequence = newIndex;

                    yield return i;
                }
                newIndex++;
            }
        }

        public static IEnumerable<T> Unpin<T>(List<T> list, T item) where T : IPinnable
        {
            throw new NotImplementedException();
        }

    }
}
