using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Noter.Persistance.Migrations
{
    public partial class catchUp : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ItemContentTypes");

            migrationBuilder.DropColumn(
                name: "Type_BaseType",
                table: "Items");

            migrationBuilder.DropColumn(
                name: "Type_Version",
                table: "Items");

            migrationBuilder.CreateTable(
                name: "Quickpicks",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Guid = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Created = table.Column<DateTime>(type: "datetime", nullable: false),
                    Modified = table.Column<DateTime>(type: "datetime", nullable: false),
                    EntityStatus = table.Column<int>(nullable: false),
                    Type = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    Context = table.Column<string>(nullable: false),
                    Sequence = table.Column<int>(nullable: false, defaultValue: 1000000)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Quickpicks", x => x.Id);
                    table.UniqueConstraint("AK_Quickpicks_Name", x => x.Name);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Quickpicks");

            migrationBuilder.AddColumn<string>(
                name: "Type_BaseType",
                table: "Items",
                maxLength: 7,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Type_Version",
                table: "Items",
                maxLength: 3,
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateTable(
                name: "ItemContentTypes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Created = table.Column<DateTime>(type: "datetime", nullable: false),
                    Description = table.Column<string>(nullable: true),
                    EntityStatus = table.Column<int>(nullable: false),
                    Guid = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Modified = table.Column<DateTime>(type: "datetime", nullable: false),
                    Name = table.Column<string>(nullable: false),
                    Notes = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ItemContentTypes", x => x.Id);
                });
        }
    }
}
