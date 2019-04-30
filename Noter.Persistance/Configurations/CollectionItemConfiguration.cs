

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Noter.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Persistance.Configurations
{
    public class CollectionItemConfiguration : IEntityTypeConfiguration<CollectionItem>
    {
        public void Configure(EntityTypeBuilder<CollectionItem> builder)
        {
            builder.Property(e => e.Guid)
                .IsRequired()
                .HasColumnType("uniqueidentifier");


            builder.Property(e => e.Created)
                .IsRequired()
                .HasColumnType("datetime");

            builder.Property(e => e.Modified)
                .IsRequired()
                .HasColumnType("datetime");

            builder.HasOne(dt => dt.Collection).WithMany(t => t.Items).HasForeignKey(dt => dt.CollectionId);

        }
    }
}
