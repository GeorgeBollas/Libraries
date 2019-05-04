using System;
using System.Collections;
using System.Collections.Generic;

namespace Noter.Application.Libraries.Queries.GetTagTypeList
{
    public class TagTypeListViewModel
    {
        public IEnumerable<TagTypeListDto> TagTypes { get; set; }
    }
}