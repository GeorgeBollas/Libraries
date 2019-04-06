using Microsoft.EntityFrameworkCore.Migrations;

namespace Noter.Persistance.Migrations
{
    public partial class renameQuickpicksToPinned : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "IsQuickPick",
                table: "Tags",
                newName: "IsPinned");

            migrationBuilder.RenameColumn(
                name: "IsQuickpick",
                table: "Libraries",
                newName: "IsPinned");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "IsPinned",
                table: "Tags",
                newName: "IsQuickPick");

            migrationBuilder.RenameColumn(
                name: "IsPinned",
                table: "Libraries",
                newName: "IsQuickpick");
        }
    }
}
