using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Noter.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Persistance.Configurations
{
    public class WorkspaceItemConfiguration : IEntityTypeConfiguration<WorkspaceItem>
    {
        public void Configure(EntityTypeBuilder<WorkspaceItem> builder)
        {
            builder.Property(e => e.Guid)
                .IsRequired()
                .HasColumnType("uniqueidentifier");

            builder.Property(e => e.DocumentId)
                .IsRequired();

            builder.Property(e => e.WorkspaceId)
                .IsRequired();

            builder.Property(e => e.Created)
                .IsRequired()
                .HasColumnType("datetime");

            builder.Property(e => e.Modified)
                .IsRequired()
                .HasColumnType("datetime");

            builder.HasOne(e => e.Document);
        }
    }
}
