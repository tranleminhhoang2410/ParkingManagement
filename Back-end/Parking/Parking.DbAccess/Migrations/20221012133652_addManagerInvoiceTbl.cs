using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Parking.DbAccess.Migrations
{
    public partial class addManagerInvoiceTbl : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ManagerInvoices",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    VehicleId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SlotId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CheckinTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    CheckoutTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    TotalPaid = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ManagerInvoices", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ManagerInvoices");
        }
    }
}
