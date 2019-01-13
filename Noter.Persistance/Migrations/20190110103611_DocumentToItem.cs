using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Noter.Persistance.Migrations
{
    public partial class DocumentToItem : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_WorkspaceItems_Documents_DocumentId",
                table: "WorkspaceItems");

            migrationBuilder.DropTable(
                name: "DocumentTags");

            migrationBuilder.DropTable(
                name: "Documents");

            migrationBuilder.RenameColumn(
                name: "DocumentId",
                table: "WorkspaceItems",
                newName: "ItemId");

            migrationBuilder.RenameIndex(
                name: "IX_WorkspaceItems_DocumentId",
                table: "WorkspaceItems",
                newName: "IX_WorkspaceItems_ItemId");

            migrationBuilder.CreateTable(
                name: "Items",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Guid = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Created = table.Column<DateTime>(type: "datetime", nullable: false),
                    Modified = table.Column<DateTime>(type: "datetime", nullable: false),
                    EntityStatus = table.Column<int>(nullable: false),
                    Title = table.Column<string>(nullable: false),
                    Notes = table.Column<string>(nullable: true),
                    LibraryId = table.Column<int>(nullable: false),
                    Type_BaseType = table.Column<string>(maxLength: 7, nullable: false),
                    Type_Version = table.Column<string>(maxLength: 3, nullable: false),
                    Context = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Items", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Items_Libraries_LibraryId",
                        column: x => x.LibraryId,
                        principalTable: "Libraries",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ItemTags",
                columns: table => new
                {
                    ItemId = table.Column<int>(nullable: false),
                    TagId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ItemTags", x => new { x.ItemId, x.TagId })
                        .Annotation("SqlServer:Clustered", false);
                    table.ForeignKey(
                        name: "FK_ItemTags_Items_ItemId",
                        column: x => x.ItemId,
                        principalTable: "Items",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ItemTags_Tags_TagId",
                        column: x => x.TagId,
                        principalTable: "Tags",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Items_LibraryId",
                table: "Items",
                column: "LibraryId");

            migrationBuilder.CreateIndex(
                name: "IX_ItemTags_TagId",
                table: "ItemTags",
                column: "TagId");

            migrationBuilder.AddForeignKey(
                name: "FK_WorkspaceItems_Items_ItemId",
                table: "WorkspaceItems",
                column: "ItemId",
                principalTable: "Items",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_WorkspaceItems_Items_ItemId",
                table: "WorkspaceItems");

            migrationBuilder.DropTable(
                name: "ItemTags");

            migrationBuilder.DropTable(
                name: "Items");

            migrationBuilder.RenameColumn(
                name: "ItemId",
                table: "WorkspaceItems",
                newName: "DocumentId");

            migrationBuilder.RenameIndex(
                name: "IX_WorkspaceItems_ItemId",
                table: "WorkspaceItems",
                newName: "IX_WorkspaceItems_DocumentId");

            migrationBuilder.CreateTable(
                name: "Documents",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CategoryId = table.Column<int>(nullable: false),
                    Context = table.Column<string>(nullable: true),
                    Created = table.Column<DateTime>(type: "datetime", nullable: false),
                    EntityStatus = table.Column<int>(nullable: false),
                    Guid = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    LibraryId = table.Column<int>(nullable: true),
                    Modified = table.Column<DateTime>(type: "datetime", nullable: false),
                    Notes = table.Column<string>(nullable: true),
                    Title = table.Column<string>(nullable: false),
                    Type_BaseType = table.Column<string>(maxLength: 7, nullable: false),
                    Type_Version = table.Column<string>(maxLength: 3, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Documents", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Documents_Libraries_LibraryId",
                        column: x => x.LibraryId,
                        principalTable: "Libraries",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "DocumentTags",
                columns: table => new
                {
                    DocumentId = table.Column<int>(nullable: false),
                    TagId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DocumentTags", x => new { x.DocumentId, x.TagId })
                        .Annotation("SqlServer:Clustered", false);
                    table.ForeignKey(
                        name: "FK_DocumentTags_Documents_DocumentId",
                        column: x => x.DocumentId,
                        principalTable: "Documents",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DocumentTags_Tags_TagId",
                        column: x => x.TagId,
                        principalTable: "Tags",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Documents_LibraryId",
                table: "Documents",
                column: "LibraryId");

            migrationBuilder.CreateIndex(
                name: "IX_DocumentTags_TagId",
                table: "DocumentTags",
                column: "TagId");

            migrationBuilder.AddForeignKey(
                name: "FK_WorkspaceItems_Documents_DocumentId",
                table: "WorkspaceItems",
                column: "DocumentId",
                principalTable: "Documents",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
