﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Noter.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Persistance.Configurations
{
    public class LibraryConfiguration : IEntityTypeConfiguration<Library>
    {
        public void Configure(EntityTypeBuilder<Library> builder)
        {
            builder.Property(e => e.Guid)
                .IsRequired()
                .HasColumnType("uniqueidentifier");

            builder.Property(e => e.Name)
                .IsRequired();

            builder.Property(e => e.IsPinned)
                .HasDefaultValue(false);

            builder.Property(e => e.Sequence)
                .IsRequired()
                .HasDefaultValue(Library.MaxSeuquence);

            builder.Property(e => e.Created)
                .IsRequired()
                .HasColumnType("datetime");

            builder.Property(e => e.Modified)
                .IsRequired()
                .HasColumnType("datetime");

            builder.HasAlternateKey("Name");

            builder.HasMany(l => l.LibraryTagTypes).WithOne(t => t.Library).OnDelete(DeleteBehavior.Restrict);

            builder.HasMany(l => l.Documents).WithOne(d => d.Library).OnDelete(DeleteBehavior.Restrict);
        }
    }
}
