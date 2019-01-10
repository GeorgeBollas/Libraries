using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Noter.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Persistance.Configurations
{
    public class ItemTagConfiguration : IEntityTypeConfiguration<ItemTag>
    {
        public void Configure(EntityTypeBuilder<ItemTag> builder)
        {
            builder.HasKey(e => new { e.ItemId, e.TagId})
                .ForSqlServerIsClustered(false);

            builder.Property(e => e.ItemId)
                .IsRequired();

            builder.Property(e => e.TagId)
                .IsRequired();

            builder.HasOne(dt => dt.Tag).WithMany(t => t.ItemTags).HasForeignKey(dt => dt.TagId);
            builder.HasOne(dt => dt.Item).WithMany(t => t.ItemTags).HasForeignKey(dt => dt.ItemId);
        }
    }
}
