using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Noter.Persistance.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CommandLogs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Guid = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Created = table.Column<DateTime>(type: "datetime", nullable: false),
                    Modified = table.Column<DateTime>(type: "datetime", nullable: false),
                    EntityStatus = table.Column<int>(nullable: false),
                    Command = table.Column<string>(nullable: false),
                    Request = table.Column<string>(nullable: false),
                    Response = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CommandLogs", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Libraries",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Guid = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Created = table.Column<DateTime>(type: "datetime", nullable: false),
                    Modified = table.Column<DateTime>(type: "datetime", nullable: false),
                    EntityStatus = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    Notes = table.Column<string>(nullable: true),
                    IsQuickpick = table.Column<bool>(nullable: false, defaultValue: false),
                    Sequence = table.Column<int>(nullable: false, defaultValue: 1000000)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Libraries", x => x.Id);
                    table.UniqueConstraint("AK_Libraries_Name", x => x.Name);
                });

            migrationBuilder.CreateTable(
                name: "Notes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Guid = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Created = table.Column<DateTime>(type: "datetime", nullable: false),
                    Modified = table.Column<DateTime>(type: "datetime", nullable: false),
                    EntityStatus = table.Column<int>(nullable: false),
                    Title = table.Column<string>(maxLength: 100, nullable: false),
                    Notes = table.Column<string>(type: "ntext", nullable: true),
                    Context = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Notes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Workspaces",
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
                    Context = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Workspaces", x => x.Id);
                });

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
                name: "Tags",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Guid = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Created = table.Column<DateTime>(type: "datetime", nullable: false),
                    Modified = table.Column<DateTime>(type: "datetime", nullable: false),
                    EntityStatus = table.Column<int>(nullable: false),
                    LibraryId = table.Column<int>(nullable: false),
                    IsQuickPick = table.Column<bool>(nullable: false),
                    Sequence = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    Notes = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tags", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Tags_Libraries_LibraryId",
                        column: x => x.LibraryId,
                        principalTable: "Libraries",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "WorkspaceItems",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Guid = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Created = table.Column<DateTime>(type: "datetime", nullable: false),
                    Modified = table.Column<DateTime>(type: "datetime", nullable: false),
                    EntityStatus = table.Column<int>(nullable: false),
                    WorkspaceId = table.Column<int>(nullable: false),
                    ItemId = table.Column<int>(nullable: false),
                    Sequence = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkspaceItems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_WorkspaceItems_Items_ItemId",
                        column: x => x.ItemId,
                        principalTable: "Items",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_WorkspaceItems_Workspaces_WorkspaceId",
                        column: x => x.WorkspaceId,
                        principalTable: "Workspaces",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
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

            migrationBuilder.CreateIndex(
                name: "IX_Tags_LibraryId",
                table: "Tags",
                column: "LibraryId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkspaceItems_ItemId",
                table: "WorkspaceItems",
                column: "ItemId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkspaceItems_WorkspaceId",
                table: "WorkspaceItems",
                column: "WorkspaceId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CommandLogs");

            migrationBuilder.DropTable(
                name: "ItemTags");

            migrationBuilder.DropTable(
                name: "Notes");

            migrationBuilder.DropTable(
                name: "WorkspaceItems");

            migrationBuilder.DropTable(
                name: "Tags");

            migrationBuilder.DropTable(
                name: "Items");

            migrationBuilder.DropTable(
                name: "Workspaces");

            migrationBuilder.DropTable(
                name: "Libraries");
        }
    }
}
