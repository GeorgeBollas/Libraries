using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Noter.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Persistance.Configurations
{
    public class AppEventConfiguration : IEntityTypeConfiguration<AppEvent>
    {
        public void Configure(EntityTypeBuilder<AppEvent> builder)
        {
            builder.Property(e => e.Guid)
                .IsRequired()
                .HasColumnType("uniqueidentifier");

            builder.Property(e => e.EventCategory)
                .IsRequired();

            builder.Property(e => e.EventTime)
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
