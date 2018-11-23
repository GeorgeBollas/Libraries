using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Noter.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Persistance.Configurations
{
    public class DocumentConfiguration : IEntityTypeConfiguration<Document>
    {
        public void Configure(EntityTypeBuilder<Document> builder)
        {
            builder.Property(e => e.Guid)
                .IsRequired()
                .HasColumnType("uniqueidentifier");

            builder.Property(e => e.Title)
                .IsRequired();

            builder.OwnsOne(e => e.Type, a =>
            {
                a.Property<string>(b => b.BaseType).IsRequired().HasMaxLength(7);
                a.Property<string>(b => b.Version).IsRequired().HasMaxLength(3);
            });

            builder.Property(e => e.Created)
                .IsRequired()
                .HasColumnType("datetime");

            builder.Property(e => e.Modified)
                .IsRequired()
                .HasColumnType("datetime");

            builder.HasMany(d => d.Tags).WithOne(dt => dt.Document);
        }
    }
}
