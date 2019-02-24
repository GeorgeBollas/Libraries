using Microsoft.EntityFrameworkCore.Migrations;

namespace Noter.Persistance.Migrations
{
    public partial class UniqueName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Libraries",
                nullable: false,
                oldClrType: typeof(string));

            migrationBuilder.AddUniqueConstraint(
                name: "AK_Libraries_Name",
                table: "Libraries",
                column: "Name");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropUniqueConstraint(
                name: "AK_Libraries_Name",
                table: "Libraries");

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Libraries",
                nullable: false,
                oldClrType: typeof(string));
        }
    }
}
