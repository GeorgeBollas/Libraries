using Microsoft.EntityFrameworkCore.Migrations;

namespace Noter.Persistance.Migrations
{
    public partial class AddedIsQuickPickToLibrary : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsQuickpick",
                table: "Libraries",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsQuickpick",
                table: "Libraries");
        }
    }
}
