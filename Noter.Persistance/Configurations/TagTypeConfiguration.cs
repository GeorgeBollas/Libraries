using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Noter.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Persistance.Configurations
{
    public class TagTypeConfiguration : IEntityTypeConfiguration<TagType>
    {
        public void Configure(EntityTypeBuilder<TagType> builder)
        {
            builder.Property(e => e.Guid)
                .IsRequired()
                .HasColumnType("uniqueidentifier");

            builder.Property(e => e.Name)
                .IsRequired();

            builder.Property(e => e.Created)
                .IsRequired()
                .HasColumnType("datetime");

            builder.Property(e => e.Modified)
                .IsRequired()
                .HasColumnType("datetime");
        }
    }
}
