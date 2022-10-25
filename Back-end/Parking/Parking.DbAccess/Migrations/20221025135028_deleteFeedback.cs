using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Parking.DbAccess.Migrations
{
    public partial class deleteFeedback : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Feedback",
                table: "Users");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Feedback",
                table: "Users",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
