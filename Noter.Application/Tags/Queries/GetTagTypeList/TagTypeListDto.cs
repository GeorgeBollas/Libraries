using Noter.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace Noter.Application.Libraries.Queries.GetTagTypeList
{
    public class TagTypeListDto
    {
        public int LibraryId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }

        public static Expression<Func<TagType, TagTypeListDto>> Projection
        {
            get
            {
                return l => new TagTypeListDto
                {
                    LibraryId = l.Id,
                    Name = l.Name,
                    Description = l.Description,
                    IsActive = l.EntityStatus == Domain.Enumerations.EntityStatus.Active,
                    
                };
            }
        }

        public static TagTypeListDto Create(TagType tagType)
        {
            return Projection.Compile().Invoke(tagType);
        }
    }
}
