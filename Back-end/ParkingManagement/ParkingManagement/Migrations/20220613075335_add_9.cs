﻿using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ParkingManagement.Migrations
{
    public partial class add_9 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "PricePerYear",
                table: "VehicleTypes",
                type: "float",
                nullable: false,
                defaultValue: 0.0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PricePerYear",
                table: "VehicleTypes");
        }
    }
}
