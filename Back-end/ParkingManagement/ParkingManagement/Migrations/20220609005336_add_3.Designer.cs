﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ParkingManagement.Data;

#nullable disable

namespace ParkingManagement.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20220609005336_add_3")]
    partial class add_3
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("ParkingManagement.Model.Account", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Role")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.Property<string>("Username")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Accounts");
                });

            modelBuilder.Entity("ParkingManagement.Model.City", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Cities");
                });

            modelBuilder.Entity("ParkingManagement.Model.District", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<int>("CityId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("CityId");

                    b.ToTable("Districts");
                });

            modelBuilder.Entity("ParkingManagement.Model.Invoice", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<DateTime>("CheckinTime")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("CheckoutTime")
                        .HasColumnType("datetime2");

                    b.Property<string>("SlotId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("VehicleId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("SlotId");

                    b.HasIndex("VehicleId");

                    b.ToTable("Invoices");
                });

            modelBuilder.Entity("ParkingManagement.Model.Slot", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<bool>("Status")
                        .HasColumnType("bit");

                    b.Property<int>("VehicleTypeId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("VehicleTypeId");

                    b.ToTable("Slots");
                });

            modelBuilder.Entity("ParkingManagement.Model.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Feedback")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Phone")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("ParkingManagement.Model.Vehicle", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.Property<string>("VehicleBrand")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("VehicleName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("VehicleTypeId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.HasIndex("VehicleTypeId");

                    b.ToTable("Vehicles");
                });

            modelBuilder.Entity("ParkingManagement.Model.VehicleType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<double>("PricePerDay")
                        .HasColumnType("float");

                    b.Property<double>("PricePerHour")
                        .HasColumnType("float");

                    b.Property<double>("PricePerMonth")
                        .HasColumnType("float");

                    b.Property<double>("PricePerWeek")
                        .HasColumnType("float");

                    b.Property<string>("TypeName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("VehicleTypes");
                });

            modelBuilder.Entity("ParkingManagement.Model.Ward", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<int>("DistrictId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("DistrictId");

                    b.ToTable("Wards");
                });

            modelBuilder.Entity("ParkingManagement.Model.Account", b =>
                {
                    b.HasOne("ParkingManagement.Model.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("ParkingManagement.Model.District", b =>
                {
                    b.HasOne("ParkingManagement.Model.City", "City")
                        .WithMany("Districts")
                        .HasForeignKey("CityId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("City");
                });

            modelBuilder.Entity("ParkingManagement.Model.Invoice", b =>
                {
                    b.HasOne("ParkingManagement.Model.Slot", "Slot")
                        .WithMany("Invoices")
                        .HasForeignKey("SlotId");

                    b.HasOne("ParkingManagement.Model.Vehicle", "Vehicle")
                        .WithMany("Invoices")
                        .HasForeignKey("VehicleId");

                    b.Navigation("Slot");

                    b.Navigation("Vehicle");
                });

            modelBuilder.Entity("ParkingManagement.Model.Slot", b =>
                {
                    b.HasOne("ParkingManagement.Model.VehicleType", "VehicleType")
                        .WithMany("Slots")
                        .HasForeignKey("VehicleTypeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("VehicleType");
                });

            modelBuilder.Entity("ParkingManagement.Model.Vehicle", b =>
                {
                    b.HasOne("ParkingManagement.Model.User", "User")
                        .WithMany("Vehicles")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ParkingManagement.Model.VehicleType", "VehicleType")
                        .WithMany("Vehicles")
                        .HasForeignKey("VehicleTypeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");

                    b.Navigation("VehicleType");
                });

            modelBuilder.Entity("ParkingManagement.Model.Ward", b =>
                {
                    b.HasOne("ParkingManagement.Model.District", "District")
                        .WithMany("Wards")
                        .HasForeignKey("DistrictId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("District");
                });

            modelBuilder.Entity("ParkingManagement.Model.City", b =>
                {
                    b.Navigation("Districts");
                });

            modelBuilder.Entity("ParkingManagement.Model.District", b =>
                {
                    b.Navigation("Wards");
                });

            modelBuilder.Entity("ParkingManagement.Model.Slot", b =>
                {
                    b.Navigation("Invoices");
                });

            modelBuilder.Entity("ParkingManagement.Model.User", b =>
                {
                    b.Navigation("Vehicles");
                });

            modelBuilder.Entity("ParkingManagement.Model.Vehicle", b =>
                {
                    b.Navigation("Invoices");
                });

            modelBuilder.Entity("ParkingManagement.Model.VehicleType", b =>
                {
                    b.Navigation("Slots");

                    b.Navigation("Vehicles");
                });
#pragma warning restore 612, 618
        }
    }
}
