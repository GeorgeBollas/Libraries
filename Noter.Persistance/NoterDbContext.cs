using Microsoft.EntityFrameworkCore;
using Noter.Domain.Entities;
using Noter.Persistance.Extensions;
using System;
using System.Collections.Generic;
using System.Text;

namespace Noter.Persistance
{
    public class NoterDbContext: DbContext
    {
        public NoterDbContext(DbContextOptions<NoterDbContext> options):base(options)
        {
          
        }


        public DbSet<Item> Items { get; set; }

        public DbSet<ItemContentType> ItemContentTypes { get; set; }

        public DbSet<ItemTag> ItemTags { get; set; }

        public DbSet<Library> Libraries { get; set; }

        public DbSet<LibraryTagType> LibraryTagTypes { get; set; }

        public DbSet<TagType> TagTypes { get; set; }

        public DbSet<Note> Notes { get; set; }

        public DbSet<Tag> Tags { get; set; }

        public DbSet<Workspace> Workspaces { get; set; }

        public DbSet<WorkspaceItem> WorkspaceItems { get; set; }

        public DbSet<CommandLog> CommandLogs { get; set; }

        public DbSet<AppEvent> AppEvents { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyAllConfigurations();
        }
    }
}
