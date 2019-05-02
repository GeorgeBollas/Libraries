using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Noter.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Persistance.Configurations
{
    public class ItemConfiguration : IEntityTypeConfiguration<Item>
    {
        public void Configure(EntityTypeBuilder<Item> builder)
        {
            builder.Property(e => e.Guid)
                .IsRequired()
                .HasColumnType("uniqueidentifier");

            builder.Property(e => e.Title)
                .IsRequired();

            builder.Property(e => e.Created)
                .IsRequired()
                .HasColumnType("datetime");

            builder.Property(e => e.Modified)
                .IsRequired()
                .HasColumnType("datetime");

            builder.HasMany(d => d.ItemTags).WithOne(dt => dt.Item).OnDelete(DeleteBehavior.Cascade);

        }
    }
}
