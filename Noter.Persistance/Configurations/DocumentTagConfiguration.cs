using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Noter.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Persistance.Configurations
{
    public class DocumentTagConfiguration : IEntityTypeConfiguration<DocumentTag>
    {
        public void Configure(EntityTypeBuilder<DocumentTag> builder)
        {
            builder.HasKey(e => new { e.DocumentId, e.TagId})
                .ForSqlServerIsClustered(false);

            builder.Property(e => e.DocumentId)
                .IsRequired();

            builder.Property(e => e.TagId)
                .IsRequired();

            builder.HasOne(dt => dt.Tag).WithMany(t => t.DocumentTags).HasForeignKey(dt => dt.TagId);
            builder.HasOne(dt => dt.Document).WithMany(t => t.DocumentTags).HasForeignKey(dt => dt.DocumentId);
        }
    }
}
