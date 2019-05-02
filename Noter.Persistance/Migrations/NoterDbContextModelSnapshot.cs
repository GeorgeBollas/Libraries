﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Noter.Persistance;

namespace Noter.Persistance.Migrations
{
    [DbContext(typeof(NoterDbContext))]
    partial class NoterDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.3-servicing-35854")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Noter.Domain.Entities.CommandLog", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Command")
                        .IsRequired();

                    b.Property<DateTime>("Created")
                        .HasColumnType("datetime");

                    b.Property<int>("EntityStatus");

                    b.Property<Guid>("Guid")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("Modified")
                        .HasColumnType("datetime");

                    b.Property<string>("Request")
                        .IsRequired();

                    b.Property<string>("Response")
                        .IsRequired();

                    b.HasKey("Id");

                    b.ToTable("CommandLogs");
                });

            modelBuilder.Entity("Noter.Domain.Entities.Item", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Context");

                    b.Property<DateTime>("Created")
                        .HasColumnType("datetime");

                    b.Property<int>("EntityStatus");

                    b.Property<Guid>("Guid")
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("LibraryId");

                    b.Property<DateTime>("Modified")
                        .HasColumnType("datetime");

                    b.Property<string>("Notes");

                    b.Property<string>("Title")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("LibraryId");

                    b.ToTable("Items");
                });

            modelBuilder.Entity("Noter.Domain.Entities.ItemTag", b =>
                {
                    b.Property<int>("ItemId");

                    b.Property<int>("TagId");

                    b.HasKey("ItemId", "TagId")
                        .HasAnnotation("SqlServer:Clustered", false);

                    b.ToTable("ItemTags");
                });

            modelBuilder.Entity("Noter.Domain.Entities.Library", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("Created")
                        .HasColumnType("datetime");

                    b.Property<string>("Description");

                    b.Property<int>("EntityStatus");

                    b.Property<Guid>("Guid")
                        .HasColumnType("uniqueidentifier");

                    b.Property<bool>("IsPinned")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValue(false);

                    b.Property<DateTime>("Modified")
                        .HasColumnType("datetime");

                    b.Property<string>("Name")
                        .IsRequired();

                    b.Property<string>("Notes");

                    b.Property<int>("Sequence")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValue(1000000);

                    b.HasKey("Id");

                    b.HasAlternateKey("Name");

                    b.ToTable("Libraries");
                });

            modelBuilder.Entity("Noter.Domain.Entities.LibraryTagType", b =>
                {
                    b.Property<int>("LibraryId");

                    b.Property<int>("TagTypeId");

                    b.Property<DateTime>("Created");

                    b.Property<int>("EntityStatus");

                    b.Property<Guid>("Guid");

                    b.Property<DateTime>("Modified");

                    b.Property<int>("Sequence");

                    b.HasKey("LibraryId", "TagTypeId")
                        .HasAnnotation("SqlServer:Clustered", false);

                    b.HasIndex("TagTypeId");

                    b.ToTable("LibraryTagTypes");
                });

            modelBuilder.Entity("Noter.Domain.Entities.Note", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Context");

                    b.Property<DateTime>("Created")
                        .HasColumnType("datetime");

                    b.Property<int>("EntityStatus");

                    b.Property<Guid>("Guid")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("Modified")
                        .HasColumnType("datetime");

                    b.Property<string>("Notes")
                        .HasColumnType("ntext");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.HasKey("Id");

                    b.ToTable("Notes");
                });

            modelBuilder.Entity("Noter.Domain.Entities.Quickpick", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Context")
                        .IsRequired();

                    b.Property<DateTime>("Created")
                        .HasColumnType("datetime");

                    b.Property<int>("EntityStatus");

                    b.Property<Guid>("Guid")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("Modified")
                        .HasColumnType("datetime");

                    b.Property<string>("Name")
                        .IsRequired();

                    b.Property<int>("Sequence")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValue(1000000);

                    b.Property<int>("Type");

                    b.HasKey("Id");

                    b.HasAlternateKey("Name");

                    b.ToTable("Quickpicks");
                });

            modelBuilder.Entity("Noter.Domain.Entities.Tag", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("Created")
                        .HasColumnType("datetime");

                    b.Property<int>("EntityStatus");

                    b.Property<Guid>("Guid")
                        .HasColumnType("uniqueidentifier");

                    b.Property<bool>("IsPinned");

                    b.Property<DateTime>("Modified")
                        .HasColumnType("datetime");

                    b.Property<string>("Name")
                        .IsRequired();

                    b.Property<string>("Notes");

                    b.Property<int>("Sequence");

                    b.Property<int>("TagTypeId");

                    b.HasKey("Id");

                    b.HasIndex("TagTypeId");

                    b.ToTable("Tags");
                });

            modelBuilder.Entity("Noter.Domain.Entities.TagType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("Created")
                        .HasColumnType("datetime");

                    b.Property<string>("Description");

                    b.Property<int>("EntityStatus");

                    b.Property<Guid>("Guid")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("Modified")
                        .HasColumnType("datetime");

                    b.Property<string>("Name")
                        .IsRequired();

                    b.Property<string>("Notes");

                    b.HasKey("Id");

                    b.ToTable("TagTypes");
                });

            modelBuilder.Entity("Noter.Domain.Entities.Workspace", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Context");

                    b.Property<DateTime>("Created")
                        .HasColumnType("datetime");

                    b.Property<int>("EntityStatus");

                    b.Property<Guid>("Guid")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("Modified")
                        .HasColumnType("datetime");

                    b.Property<string>("Notes");

                    b.Property<string>("Title")
                        .IsRequired();

                    b.HasKey("Id");

                    b.ToTable("Workspaces");
                });

            modelBuilder.Entity("Noter.Domain.Entities.WorkspaceItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("Created")
                        .HasColumnType("datetime");

                    b.Property<int>("EntityStatus");

                    b.Property<Guid>("Guid")
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("ItemId");

                    b.Property<DateTime>("Modified")
                        .HasColumnType("datetime");

                    b.Property<int>("Sequence");

                    b.Property<int>("WorkspaceId");

                    b.HasKey("Id");

                    b.HasIndex("ItemId");

                    b.HasIndex("WorkspaceId");

                    b.ToTable("WorkspaceItems");
                });

            modelBuilder.Entity("Noter.Domain.Entities.Item", b =>
                {
                    b.HasOne("Noter.Domain.Entities.Library", "Library")
                        .WithMany("Documents")
                        .HasForeignKey("LibraryId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("Noter.Domain.Entities.ItemTag", b =>
                {
                    b.HasOne("Noter.Domain.Entities.Item", "Item")
                        .WithMany("ItemTags")
                        .HasForeignKey("ItemId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Noter.Domain.Entities.Tag", "Tag")
                        .WithMany("ItemTags")
                        .HasForeignKey("ItemId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Noter.Domain.Entities.LibraryTagType", b =>
                {
                    b.HasOne("Noter.Domain.Entities.Library", "Library")
                        .WithMany("LibraryTagTypes")
                        .HasForeignKey("LibraryId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("Noter.Domain.Entities.TagType", "TagType")
                        .WithMany("LibraryTagTypes")
                        .HasForeignKey("TagTypeId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Noter.Domain.Entities.Tag", b =>
                {
                    b.HasOne("Noter.Domain.Entities.TagType", "TagType")
                        .WithMany("Tags")
                        .HasForeignKey("TagTypeId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Noter.Domain.Entities.WorkspaceItem", b =>
                {
                    b.HasOne("Noter.Domain.Entities.Item", "Item")
                        .WithMany()
                        .HasForeignKey("ItemId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Noter.Domain.Entities.Workspace", "Workspace")
                        .WithMany("Items")
                        .HasForeignKey("WorkspaceId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
