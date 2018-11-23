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
                .HasAnnotation("ProductVersion", "2.2.0-preview3-35497")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Noter.Domain.Entities.Category", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("Created");

                    b.Property<int>("EntityStatus");

                    b.Property<Guid>("Guid");

                    b.Property<DateTime>("Modified");

                    b.Property<string>("Name");

                    b.Property<string>("Notes");

                    b.HasKey("Id");

                    b.ToTable("Categories");
                });

            modelBuilder.Entity("Noter.Domain.Entities.Document", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CategoryId");

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

                    b.HasIndex("CategoryId");

                    b.ToTable("Documents");
                });

            modelBuilder.Entity("Noter.Domain.Entities.DocumentTag", b =>
                {
                    b.Property<int>("DocumentId");

                    b.Property<int>("TagId");

                    b.HasKey("DocumentId", "TagId")
                        .HasAnnotation("SqlServer:Clustered", false);

                    b.HasIndex("TagId");

                    b.ToTable("DocumentTags");
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

            modelBuilder.Entity("Noter.Domain.Entities.Tag", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CategoryId");

                    b.Property<DateTime>("Created");

                    b.Property<int>("EntityStatus");

                    b.Property<Guid>("Guid");

                    b.Property<bool>("IsQuickPick");

                    b.Property<DateTime>("Modified");

                    b.Property<string>("Name");

                    b.Property<string>("Notes");

                    b.Property<int>("Sequence");

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.ToTable("Tags");
                });

            modelBuilder.Entity("Noter.Domain.Entities.Workspace", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Context");

                    b.Property<DateTime>("Created");

                    b.Property<int>("EntityStatus");

                    b.Property<Guid>("Guid");

                    b.Property<DateTime>("Modified");

                    b.Property<string>("Notes");

                    b.Property<string>("Title");

                    b.HasKey("Id");

                    b.ToTable("Workspaces");
                });

            modelBuilder.Entity("Noter.Domain.Entities.WorkspaceItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("Created");

                    b.Property<int>("DocumentId");

                    b.Property<int>("EntityStatus");

                    b.Property<Guid>("Guid");

                    b.Property<DateTime>("Modified");

                    b.Property<int>("Sequence");

                    b.Property<int?>("WorkspaceId");

                    b.HasKey("Id");

                    b.HasIndex("DocumentId");

                    b.HasIndex("WorkspaceId");

                    b.ToTable("WorkspaceItems");
                });

            modelBuilder.Entity("Noter.Domain.Entities.Document", b =>
                {
                    b.HasOne("Noter.Domain.Entities.Category", "Category")
                        .WithMany()
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.OwnsOne("Noter.Domain.ValueObjects.DocumentType", "Type", b1 =>
                        {
                            b1.Property<int>("DocumentId")
                                .ValueGeneratedOnAdd()
                                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                            b1.Property<string>("BaseType")
                                .IsRequired()
                                .HasMaxLength(7);

                            b1.Property<string>("Version")
                                .IsRequired()
                                .HasMaxLength(3);

                            b1.HasKey("DocumentId");

                            b1.ToTable("Documents");

                            b1.HasOne("Noter.Domain.Entities.Document")
                                .WithOne("Type")
                                .HasForeignKey("Noter.Domain.ValueObjects.DocumentType", "DocumentId")
                                .OnDelete(DeleteBehavior.Cascade);
                        });
                });

            modelBuilder.Entity("Noter.Domain.Entities.DocumentTag", b =>
                {
                    b.HasOne("Noter.Domain.Entities.Document", "Document")
                        .WithMany("Tags")
                        .HasForeignKey("DocumentId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Noter.Domain.Entities.Tag", "Tag")
                        .WithMany()
                        .HasForeignKey("TagId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Noter.Domain.Entities.Tag", b =>
                {
                    b.HasOne("Noter.Domain.Entities.Category", "Category")
                        .WithMany("Tags")
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Noter.Domain.Entities.WorkspaceItem", b =>
                {
                    b.HasOne("Noter.Domain.Entities.Document", "Document")
                        .WithMany()
                        .HasForeignKey("DocumentId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Noter.Domain.Entities.Workspace")
                        .WithMany("Items")
                        .HasForeignKey("WorkspaceId");
                });
#pragma warning restore 612, 618
        }
    }
}
