using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Parking.DbAccess.Migrations
{
    public partial class updateVehicleTypeTbl1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PricePerMonth",
                table: "VehicleTypes");

            migrationBuilder.DropColumn(
                name: "PricePerYear",
                table: "VehicleTypes");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "PricePerMonth",
                table: "VehicleTypes",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "PricePerYear",
                table: "VehicleTypes",
                type: "float",
                nullable: false,
                defaultValue: 0.0);
        }
    }
}
