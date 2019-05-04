using Noter.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace Noter.Application.Libraries.Queries.GetTagTypeList
{
    public class TagListDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }
        public bool IsPinned { get; set; }
        public int TagTypeId { get; set; }

        public static Expression<Func<Tag, TagListDto>> Projection
        {
            get
            {
                return l => new TagListDto
                {
                    
                    Id = l.Id,
                    Name = l.Name,
                    Description = l.Description,
                    IsActive = l.EntityStatus == Domain.Enumerations.EntityStatus.Active
                    TagTypeId = l.TagTypeId,
                };
            }
        }

        public static TagListDto Create(Tag tag)
        {
            return Projection.Compile().Invoke(tag);
        }
    }
}
