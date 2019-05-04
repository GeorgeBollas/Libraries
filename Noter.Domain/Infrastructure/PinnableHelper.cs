using Noter.Domain.Infrastructure;
using Noter.Infrastructure;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Noter.Infrastructure
{
    public static class PinnableHelper
    {
        /// <summary>
        /// Pin the new item
        /// If index is out of range it puts it at the end of the list
        /// </summary>
        /// <param name="list">The list ordered list of pinned items</param>
        /// <param name="item">the item to be pinned</param>
        /// <returns>all items that have had their sequence changed, including the new item</returns>
        public static IEnumerable<T> Pin<T>(List<T> list, T item, int index)
            where T : IPinnable
        {
            list.Remove(item);

            if (index > list.Count || index < 0)
                index = list.Count;

            list.Insert(index, item); //will append if = count

            var newIndex = 0;

            foreach (var i in list)
            {
                if (i.Sequence != newIndex || i.Equals(item))
                {
                    i.Sequence = newIndex;

                    yield return i;
                }
                newIndex++;
            }
        }

        public static IEnumerable<T> Pin<T>(List<T> list, T item)
            where T : IPinnable
        {

            var index = list.Count;

            return Pin(list, item, index);
        }

        public static IEnumerable<T> Unpin<T>(List<T> list, T item) where T : IPinnable
        {
            throw new NotImplementedException();
        }

    }
}
