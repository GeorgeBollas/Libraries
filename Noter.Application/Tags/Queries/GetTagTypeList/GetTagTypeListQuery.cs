using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Application.Libraries.Queries.GetTagTypeList
{
    public class GetTagTypeListQuery : IRequest<TagTypeListViewModel>
    {
        public string NamePart { get; set; }

        public bool IncludeInactive { get; set; }

        public bool IncludeTags { get; set; }

        public bool PinnedTagsFirst { get; set; }

    }
}
