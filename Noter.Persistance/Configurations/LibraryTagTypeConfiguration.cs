using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Noter.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Persistance.Configurations
{
    
    public class LibraryTagTypeConfiguration : IEntityTypeConfiguration<LibraryTagType>
    {
        public void Configure(EntityTypeBuilder<LibraryTagType> builder)
        {
            builder.HasKey(e => new { e.LibraryId, e.TagTypeId })
                .ForSqlServerIsClustered(false);

            builder.Property(e => e.LibraryId)
                .IsRequired();

            builder.Property(e => e.TagTypeId)
                .IsRequired();

            builder.HasOne(dt => dt.Library).WithMany(t => t.LibraryTagTypes).HasForeignKey(dt => dt.LibraryId);
            builder.HasOne(dt => dt.TagType).WithMany(t => t.LibraryTagTypes).HasForeignKey(dt => dt.TagTypeId);
        }
    }
}
