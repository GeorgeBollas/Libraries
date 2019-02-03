using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Noter.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Persistance.Configurations
{
    public class CommandLogConfiguration : IEntityTypeConfiguration<CommandLog>
    {
        public void Configure(EntityTypeBuilder<CommandLog> builder)
        {
            builder.Property(e => e.Guid)
                .IsRequired()
                .HasColumnType("uniqueidentifier");

            builder.Property(e => e.Command)
                .IsRequired();

            builder.Property(e => e.Request)
                .IsRequired();

            builder.Property(e => e.Response)
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
