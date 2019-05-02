using Noter.Domain.Entities;
using Noter.Domain.Enumerations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Noter.Persistance
{
    public class NoterInitializer
    {
        private readonly Dictionary<int, Library> Libraries = new Dictionary<int, Library>();
        private int ProgrammingCategoryId;

        private readonly Dictionary<int, Item> Items = new Dictionary<int, Item>();

        private readonly Dictionary<int, TagType> TagTypes = new Dictionary<int, TagType>();
        private int DocumentTypeId;

        private readonly Dictionary<int, Tag> Tags = new Dictionary<int, Tag>();
        private int DotNetCoreId;

        public static void Initialize(NoterDbContext context)
        {
            var initializer = new NoterInitializer();
            initializer.SeedEverything(context);
        }

        public void SeedEverything(NoterDbContext context)
        {
            context.Database.EnsureCreated();

            if (context.Notes.Any())
            {
                return; // Db has been seeded
            }

            SeedNotes(context);
            SeedCategories(context);
            SeedTags(context);
            SeedItems(context);
            SeedWorkspaces(context);

        }

        private void SeedCategories(NoterDbContext context)
        {
            var now = DateTime.Now;

            Libraries.Add(1,
                new Library()
                {
                    Guid = Guid.NewGuid(),
                    Name = "Programming",
                    EntityStatus = EntityStatus.Active,
                    Created = now,
                    Modified = now,
                });


            foreach (var lib in Libraries)
            {
                context.Libraries.Add(lib.Value);
            }

            context.SaveChanges();

            ProgrammingCategoryId = Libraries[1].Id;

        }

        private void SeedTags(NoterDbContext context)
        {
            var now = DateTime.Now;

            TagTypes.Add(1, new TagType() { Guid = Guid.NewGuid(), Name = "Document Types", EntityStatus = EntityStatus.Active, Created = now, Modified = now });

            Tags.Add(1, new Tag() { Guid = Guid.NewGuid(), Name = "Tutorial", EntityStatus = EntityStatus.Active, Created = now, Modified = now, TagType = TagTypes[1] });
            Tags.Add(2, new Tag() { Guid = Guid.NewGuid(), Name = ".How To", EntityStatus = EntityStatus.Active, Created = now, Modified = now, TagType = TagTypes[1] });
            Tags.Add(3, new Tag() { Guid = Guid.NewGuid(), Name = "Tip", EntityStatus = EntityStatus.Active, Created = now, Modified = now, TagType = TagTypes[1] });
            Tags.Add(4, new Tag() { Guid = Guid.NewGuid(), Name = "Software Installer", EntityStatus = EntityStatus.Active, Created = now, Modified = now, TagType = TagTypes[1] });

            context.TagTypes.Add(TagTypes[1]);

            foreach (var tag in Tags)
            {
                context.Tags.Add(tag.Value);
            }

            context.SaveChanges();
        }

        private void SeedNotes(NoterDbContext context)
        {
            var now = DateTime.Now;

            var notes = new[]
            {
                new Note { Guid = Guid.NewGuid(), Title = "Welcome to notter", EntityStatus = EntityStatus.Active, Created = now, Modified = now }
            };

            context.Notes.AddRange(notes);

            context.SaveChanges();

        }


        private void SeedItems(NoterDbContext context)
        {
            var now = DateTime.Now;

            var items = new[]
            {
                new Item() {Guid = Guid.NewGuid(), LibraryId = ProgrammingCategoryId , EntityStatus = EntityStatus.Active, Created = now, Modified = now,
                    ItemTags = new ItemTag[]
                    {
                        new ItemTag() { TagId = DotNetCoreId }
                    }
                }
            };

            context.Items.AddRange(items);
        }

        private void SeedWorkspaces(NoterDbContext context)
        {
            var now = DateTime.Now;

            var workspaces = new[]
            {
                new Workspace
                {
                    Guid = Guid.NewGuid(), Title = "Welcome to notter", EntityStatus = EntityStatus.Active, Created = now, Modified = now,
                    Items = new []
                    {
                        new WorkspaceItem(){ Guid = Guid.NewGuid(), ItemId = Items[1].Id, EntityStatus = EntityStatus.Active, Created = now, Modified = now }
                    }
                }
            };

            context.Workspaces.AddRange(workspaces);

            context.SaveChanges();
        }
    }
}
