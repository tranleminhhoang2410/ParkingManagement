USE [ParkingDB]
GO
ALTER TABLE [dbo].[Wards] DROP CONSTRAINT [FK_Wards_Districts_DistrictId]
GO
ALTER TABLE [dbo].[Vehicles] DROP CONSTRAINT [FK_Vehicles_VehicleTypes_VehicleTypeId]
GO
ALTER TABLE [dbo].[Vehicles] DROP CONSTRAINT [FK_Vehicles_Users_UserID]
GO
ALTER TABLE [dbo].[Users] DROP CONSTRAINT [FK_Users_Wards_WardId]
GO
ALTER TABLE [dbo].[Users] DROP CONSTRAINT [FK_Users_Districts_DistrictId]
GO
ALTER TABLE [dbo].[Users] DROP CONSTRAINT [FK_Users_Cities_CityId]
GO
ALTER TABLE [dbo].[Slots] DROP CONSTRAINT [FK_Slots_VehicleTypes_VehicleTypeId]
GO
ALTER TABLE [dbo].[Invoices] DROP CONSTRAINT [FK_Invoices_Vehicles_VehicleId]
GO
ALTER TABLE [dbo].[Invoices] DROP CONSTRAINT [FK_Invoices_Slots_SlotId]
GO
ALTER TABLE [dbo].[Districts] DROP CONSTRAINT [FK_Districts_Cities_CityId]
GO
ALTER TABLE [dbo].[AccountTokens] DROP CONSTRAINT [FK_AccountTokens_Users_UserId]
GO
ALTER TABLE [dbo].[Accounts] DROP CONSTRAINT [FK_Accounts_Users_UserId]
GO
/****** Object:  Table [dbo].[Wards]    Script Date: 9/3/2022 10:38:08 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Wards]') AND type in (N'U'))
DROP TABLE [dbo].[Wards]
GO
/****** Object:  Table [dbo].[VehicleTypes]    Script Date: 9/3/2022 10:38:08 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[VehicleTypes]') AND type in (N'U'))
DROP TABLE [dbo].[VehicleTypes]
GO
/****** Object:  Table [dbo].[Vehicles]    Script Date: 9/3/2022 10:38:08 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Vehicles]') AND type in (N'U'))
DROP TABLE [dbo].[Vehicles]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 9/3/2022 10:38:08 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Users]') AND type in (N'U'))
DROP TABLE [dbo].[Users]
GO
/****** Object:  Table [dbo].[Slots]    Script Date: 9/3/2022 10:38:08 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Slots]') AND type in (N'U'))
DROP TABLE [dbo].[Slots]
GO
/****** Object:  Table [dbo].[Invoices]    Script Date: 9/3/2022 10:38:08 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Invoices]') AND type in (N'U'))
DROP TABLE [dbo].[Invoices]
GO
/****** Object:  Table [dbo].[Districts]    Script Date: 9/3/2022 10:38:08 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Districts]') AND type in (N'U'))
DROP TABLE [dbo].[Districts]
GO
/****** Object:  Table [dbo].[Cities]    Script Date: 9/3/2022 10:38:08 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Cities]') AND type in (N'U'))
DROP TABLE [dbo].[Cities]
GO
/****** Object:  Table [dbo].[AccountTokens]    Script Date: 9/3/2022 10:38:08 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[AccountTokens]') AND type in (N'U'))
DROP TABLE [dbo].[AccountTokens]
GO
/****** Object:  Table [dbo].[Accounts]    Script Date: 9/3/2022 10:38:08 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Accounts]') AND type in (N'U'))
DROP TABLE [dbo].[Accounts]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 9/3/2022 10:38:08 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[__EFMigrationsHistory]') AND type in (N'U'))
DROP TABLE [dbo].[__EFMigrationsHistory]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 9/3/2022 10:38:08 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Accounts]    Script Date: 9/3/2022 10:38:08 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Accounts](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Username] [nvarchar](max) NULL,
	[Password] [nvarchar](max) NULL,
	[Role] [nvarchar](max) NULL,
	[UserId] [int] NOT NULL,
 CONSTRAINT [PK_Accounts] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AccountTokens]    Script Date: 9/3/2022 10:38:08 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AccountTokens](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[JWT] [nvarchar](max) NULL,
	[PasswordResetToken] [nvarchar](max) NULL,
	[ResetTokenExpires] [datetime2](7) NULL,
	[UserId] [int] NOT NULL,
 CONSTRAINT [PK_AccountTokens] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Cities]    Script Date: 9/3/2022 10:38:08 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cities](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NULL,
 CONSTRAINT [PK_Cities] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Districts]    Script Date: 9/3/2022 10:38:08 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Districts](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[CityId] [int] NOT NULL,
 CONSTRAINT [PK_Districts] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Invoices]    Script Date: 9/3/2022 10:38:08 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Invoices](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CheckinTime] [datetime2](7) NULL,
	[CheckoutTime] [datetime2](7) NULL,
	[VehicleId] [nvarchar](450) NULL,
	[SlotId] [nvarchar](450) NULL,
	[TotalPaid] [float] NOT NULL,
 CONSTRAINT [PK_Invoices] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Slots]    Script Date: 9/3/2022 10:38:08 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Slots](
	[Id] [nvarchar](450) NOT NULL,
	[Status] [bit] NOT NULL,
	[VehicleTypeId] [int] NOT NULL,
 CONSTRAINT [PK_Slots] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 9/3/2022 10:38:08 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[Email] [nvarchar](max) NULL,
	[Phone] [nvarchar](max) NULL,
	[CityId] [int] NULL,
	[DistrictId] [int] NULL,
	[WardId] [int] NULL,
	[Feedback] [nvarchar](max) NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Vehicles]    Script Date: 9/3/2022 10:38:08 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Vehicles](
	[Id] [nvarchar](450) NOT NULL,
	[VehicleName] [nvarchar](max) NULL,
	[VehicleBrand] [nvarchar](max) NULL,
	[UserID] [int] NOT NULL,
	[VehicleTypeId] [int] NOT NULL,
	[IsParking] [bit] NOT NULL,
 CONSTRAINT [PK_Vehicles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VehicleTypes]    Script Date: 9/3/2022 10:38:08 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VehicleTypes](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[TypeName] [nvarchar](max) NULL,
	[PricePerHour] [float] NOT NULL,
	[PricePerDay] [float] NOT NULL,
	[PricePerWeek] [float] NOT NULL,
	[PricePerMonth] [float] NOT NULL,
	[PricePerYear] [float] NOT NULL,
 CONSTRAINT [PK_VehicleTypes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Wards]    Script Date: 9/3/2022 10:38:08 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Wards](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[DistrictId] [int] NOT NULL,
 CONSTRAINT [PK_Wards] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20220902100722_add_db', N'6.0.6')
GO
SET IDENTITY_INSERT [dbo].[Accounts] ON 

INSERT [dbo].[Accounts] ([Id], [Username], [Password], [Role], [UserId]) VALUES (1, N'test', N'test', N'User', 1)
INSERT [dbo].[Accounts] ([Id], [Username], [Password], [Role], [UserId]) VALUES (2, N'test2', N'test2', NULL, 2)
INSERT [dbo].[Accounts] ([Id], [Username], [Password], [Role], [UserId]) VALUES (3, N'a1', N'a1111', N'User', 3)
INSERT [dbo].[Accounts] ([Id], [Username], [Password], [Role], [UserId]) VALUES (4, N'admin', N'admin', N'Admin', 4)
INSERT [dbo].[Accounts] ([Id], [Username], [Password], [Role], [UserId]) VALUES (5, N'user', N'EE11CBB19052E40B07AAC0CA060C23EE', N'Admin', 5)
INSERT [dbo].[Accounts] ([Id], [Username], [Password], [Role], [UserId]) VALUES (6, N'user2', N'7E58D63B60197CEB55A1C487989A3720', N'Admin', 6)
INSERT [dbo].[Accounts] ([Id], [Username], [Password], [Role], [UserId]) VALUES (7, N'user3', N'92877AF70A45FD6A2ED7FE81E1236B78', N'User', 7)
INSERT [dbo].[Accounts] ([Id], [Username], [Password], [Role], [UserId]) VALUES (8, N'user4', N'3F02EBE3D7929B091E3D8CCFDE2F3BC6', N'User', 8)
INSERT [dbo].[Accounts] ([Id], [Username], [Password], [Role], [UserId]) VALUES (9, N'phong', N'9F48495BB4B98AC37A1A72C7E6490C7A', N'User', 9)
INSERT [dbo].[Accounts] ([Id], [Username], [Password], [Role], [UserId]) VALUES (10, N'phong1', N'8C0E4FE20CE7752A5E3441AC873AEA3A', N'User', 10)
INSERT [dbo].[Accounts] ([Id], [Username], [Password], [Role], [UserId]) VALUES (11, N'phong2', N'86E256DA41D824DE44E181B13992D898', N'User', 11)
INSERT [dbo].[Accounts] ([Id], [Username], [Password], [Role], [UserId]) VALUES (12, N'phong3', N'D744DC411DC674EBFEBD7B1680B7085C', N'User', 12)
INSERT [dbo].[Accounts] ([Id], [Username], [Password], [Role], [UserId]) VALUES (13, N'phong4', N'370BFCD7A30DE990924EF7EBED829C2C', N'User', 13)
INSERT [dbo].[Accounts] ([Id], [Username], [Password], [Role], [UserId]) VALUES (14, N'phong5', N'E9A3E7B8FC6E1F9D66E968113EBE1BA8', N'User', 14)
INSERT [dbo].[Accounts] ([Id], [Username], [Password], [Role], [UserId]) VALUES (15, N'phong6', N'026B4B6356892D23BBAFAF67A1E5ED88', N'User', 15)
INSERT [dbo].[Accounts] ([Id], [Username], [Password], [Role], [UserId]) VALUES (16, N'phong7', N'C1D94AEC6C6ABC0DA8D44DAB6EF630C8', N'User', 16)
INSERT [dbo].[Accounts] ([Id], [Username], [Password], [Role], [UserId]) VALUES (17, N'phong8', N'DA8DF582E1202402D169A90D3E88E9A7', N'User', 17)
INSERT [dbo].[Accounts] ([Id], [Username], [Password], [Role], [UserId]) VALUES (18, N'phong9', N'AAEC15CA45D53852E115B4DD832375D3', N'User', 18)
INSERT [dbo].[Accounts] ([Id], [Username], [Password], [Role], [UserId]) VALUES (19, N'linh', N'009B35B6A859335651D384702F545A04', N'User', 19)
INSERT [dbo].[Accounts] ([Id], [Username], [Password], [Role], [UserId]) VALUES (20, N'phongNew', N'8C0E4FE20CE7752A5E3441AC873AEA3A', N'User', 20)
INSERT [dbo].[Accounts] ([Id], [Username], [Password], [Role], [UserId]) VALUES (21, N'newuser', N'0354D89C28EC399C00D3CB2D094CF093', N'User', 21)
SET IDENTITY_INSERT [dbo].[Accounts] OFF
GO
SET IDENTITY_INSERT [dbo].[AccountTokens] ON 

INSERT [dbo].[AccountTokens] ([Id], [JWT], [PasswordResetToken], [ResetTokenExpires], [UserId]) VALUES (1, NULL, N'59F178D576C7571BF9D57D3552D0D34226B4C97EF5E1D24A68E04CA58ECBEBEA67AA7821A73ADCF218627978F37FD6CB1AB4591487B49526A0379E116B112EA2', CAST(N'2022-09-03T11:49:07.4109183' AS DateTime2), 9)
INSERT [dbo].[AccountTokens] ([Id], [JWT], [PasswordResetToken], [ResetTokenExpires], [UserId]) VALUES (2, N'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI2Iiwicm9sZSI6IkFkbWluIiwibmJmIjoxNjYyMTI1OTExLCJleHAiOjE2NjIxMzY3MTEsImlhdCI6MTY2MjEyNTkxMX0.fZ3c3qyAmpxi_x-GhjoBwZphMPc_S1J21ksjNNv0m1w', NULL, NULL, 6)
INSERT [dbo].[AccountTokens] ([Id], [JWT], [PasswordResetToken], [ResetTokenExpires], [UserId]) VALUES (3, NULL, N'E5284CC076E2E4085CCF6B9158ADC80F6D4DA6B92CFA7620BF81FC507DB4E81A3F418D154B161D9AA17C0747F1D8D40996A570FCB4E666D7B69D8F2D223A73B8', CAST(N'2022-09-03T01:33:49.7168078' AS DateTime2), 11)
INSERT [dbo].[AccountTokens] ([Id], [JWT], [PasswordResetToken], [ResetTokenExpires], [UserId]) VALUES (4, NULL, N'E5284CC076E2E4085CCF6B9158ADC80F6D4DA6B92CFA7620BF81FC507DB4E81A3F418D154B161D9AA17C0747F1D8D40996A570FCB4E666D7B69D8F2D223A73B8', CAST(N'2022-09-03T01:34:56.2400017' AS DateTime2), 12)
INSERT [dbo].[AccountTokens] ([Id], [JWT], [PasswordResetToken], [ResetTokenExpires], [UserId]) VALUES (5, NULL, N'D1684149A03474166D4075172297BD9C8828641EA467E3479AD6C575E1C9E2771A69DB4551D0AD8960CAE15D4239353C619E09F449076C353C440F4F7531B3B7', CAST(N'2022-09-03T01:37:01.1562716' AS DateTime2), 13)
INSERT [dbo].[AccountTokens] ([Id], [JWT], [PasswordResetToken], [ResetTokenExpires], [UserId]) VALUES (6, NULL, N'D5B165DC343C4FB4AFEBCF696EDA1A99ECE7AE944A43772DEC9B4995E6675EAEB426619590A36FDBE64F6DE6796B0E0489098BCBD37D3DC32928C097B8B36344', CAST(N'2022-09-03T10:44:10.8918031' AS DateTime2), 14)
INSERT [dbo].[AccountTokens] ([Id], [JWT], [PasswordResetToken], [ResetTokenExpires], [UserId]) VALUES (7, NULL, N'884B979D827D19061BEAB595A4017499B0C636B4FB22EA67CF36B43F53C6C28EF54B16240B0871EEB7EF8410C6A31AEAF9DC6D7453B7796A2142B6C55030D072', CAST(N'2022-09-03T12:18:15.2858369' AS DateTime2), 5)
SET IDENTITY_INSERT [dbo].[AccountTokens] OFF
GO
SET IDENTITY_INSERT [dbo].[Cities] ON 

INSERT [dbo].[Cities] ([Id], [Name]) VALUES (1, N'Đà Nẵng')
INSERT [dbo].[Cities] ([Id], [Name]) VALUES (2, N'Hà Nội')
INSERT [dbo].[Cities] ([Id], [Name]) VALUES (3, N'TP HCM')
SET IDENTITY_INSERT [dbo].[Cities] OFF
GO
SET IDENTITY_INSERT [dbo].[Districts] ON 

INSERT [dbo].[Districts] ([Id], [Name], [CityId]) VALUES (1, N'Hải Châu', 1)
INSERT [dbo].[Districts] ([Id], [Name], [CityId]) VALUES (2, N'Sơn Trà', 1)
INSERT [dbo].[Districts] ([Id], [Name], [CityId]) VALUES (3, N'Cẩm Lệ', 1)
SET IDENTITY_INSERT [dbo].[Districts] OFF
GO
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A1', 1, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A10', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A11', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A12', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A13', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A14', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A15', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A16', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A17', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A18', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A19', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A2', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A20', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A21', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A22', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A3', 1, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A4', 1, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A5', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A6', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A7', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A8', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A9', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B1', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B10', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B11', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B12', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B13', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B14', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B15', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B16', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B17', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B18', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B19', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B2', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B20', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B21', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B22', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B3', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B4', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B5', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B6', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B7', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B8', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B9', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C1', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C10', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C11', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C12', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C13', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C14', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C15', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C16', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C17', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C18', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C19', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C2', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C20', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C21', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C22', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C3', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C4', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C5', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C6', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C7', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C8', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C9', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D1', 1, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D10', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D11', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D12', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D13', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D14', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D15', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D16', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D17', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D18', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D19', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D2', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D20', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D21', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D22', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D3', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D4', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D5', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D6', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D7', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D8', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D9', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E1', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E10', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E11', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E12', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E13', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E14', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E2', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E3', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E4', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E5', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E6', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E7', 0, 3)
GO
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E8', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E9', 0, 3)
GO
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([Id], [Name], [Email], [Phone], [CityId], [DistrictId], [WardId], [Feedback]) VALUES (1, N'Test user', N'bon2762001@gmail.com', N'000000000', 1, 1, 1, NULL)
INSERT [dbo].[Users] ([Id], [Name], [Email], [Phone], [CityId], [DistrictId], [WardId], [Feedback]) VALUES (2, N'name', N'bon2762001@gmail.com', N'123987675', 1, 1, 2, NULL)
INSERT [dbo].[Users] ([Id], [Name], [Email], [Phone], [CityId], [DistrictId], [WardId], [Feedback]) VALUES (3, N'a11', N'bon2762001@gmail.com', N'123123123', NULL, NULL, NULL, NULL)
INSERT [dbo].[Users] ([Id], [Name], [Email], [Phone], [CityId], [DistrictId], [WardId], [Feedback]) VALUES (4, N'admin name', N'bon2762001@gmail.com', N'123456789', NULL, NULL, NULL, NULL)
INSERT [dbo].[Users] ([Id], [Name], [Email], [Phone], [CityId], [DistrictId], [WardId], [Feedback]) VALUES (5, N'Useruser', N'bon2762001@gmail.com', NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Users] ([Id], [Name], [Email], [Phone], [CityId], [DistrictId], [WardId], [Feedback]) VALUES (6, N'Useruser2', N'bon2762001@gmail.com', NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Users] ([Id], [Name], [Email], [Phone], [CityId], [DistrictId], [WardId], [Feedback]) VALUES (7, N'Useruser3', N'bon2762001@gmail.com', NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Users] ([Id], [Name], [Email], [Phone], [CityId], [DistrictId], [WardId], [Feedback]) VALUES (8, N'Useruser4', N'bon2762001@gmail.com', NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Users] ([Id], [Name], [Email], [Phone], [CityId], [DistrictId], [WardId], [Feedback]) VALUES (9, N'huynh thai phong', N'bon2762001@gmail.com', N'012 345 6789', NULL, NULL, NULL, NULL)
INSERT [dbo].[Users] ([Id], [Name], [Email], [Phone], [CityId], [DistrictId], [WardId], [Feedback]) VALUES (10, N'thai phong 1', N'bon2762001@gmail.com', N'123 123 1234', NULL, NULL, NULL, NULL)
INSERT [dbo].[Users] ([Id], [Name], [Email], [Phone], [CityId], [DistrictId], [WardId], [Feedback]) VALUES (11, N'Userphong2', N'bon2762001@gmail.com', NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Users] ([Id], [Name], [Email], [Phone], [CityId], [DistrictId], [WardId], [Feedback]) VALUES (12, N'Userphong3', N'bon2762001@gmail.com', NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Users] ([Id], [Name], [Email], [Phone], [CityId], [DistrictId], [WardId], [Feedback]) VALUES (13, N'Userphong4', N'bon2762001@gmail.com', NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Users] ([Id], [Name], [Email], [Phone], [CityId], [DistrictId], [WardId], [Feedback]) VALUES (14, N'Userphong5', N'bon2762001@gmail.com', NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Users] ([Id], [Name], [Email], [Phone], [CityId], [DistrictId], [WardId], [Feedback]) VALUES (15, N'Userphong6', N'bon2762001@gmail.com', NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Users] ([Id], [Name], [Email], [Phone], [CityId], [DistrictId], [WardId], [Feedback]) VALUES (16, N'Userphong7', N'bon2762001@gmail.com', NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Users] ([Id], [Name], [Email], [Phone], [CityId], [DistrictId], [WardId], [Feedback]) VALUES (17, N'Userphong8', N'bon2762001@gmail.com', NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Users] ([Id], [Name], [Email], [Phone], [CityId], [DistrictId], [WardId], [Feedback]) VALUES (18, N'Userphong9', N'bon2762001@gmail.com', NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Users] ([Id], [Name], [Email], [Phone], [CityId], [DistrictId], [WardId], [Feedback]) VALUES (19, N'wibu 123', N'bon2762001@gmail.com', N'1233455461', NULL, NULL, NULL, NULL)
INSERT [dbo].[Users] ([Id], [Name], [Email], [Phone], [CityId], [DistrictId], [WardId], [Feedback]) VALUES (20, N'UserphongNew', N'bon2762001@gmail.com', NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Users] ([Id], [Name], [Email], [Phone], [CityId], [DistrictId], [WardId], [Feedback]) VALUES (21, N'this is new user', N'bon2762001@gmail.com', N'1234567890', NULL, NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'A43-000001', NULL, NULL, 19, 1, 0)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'A43-100001', NULL, NULL, 9, 1, 0)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'A43-111111', N'aaa', N'aaa', 2, 2, 0)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'A43-111222', N'Toyota', N'Toyota', 1, 1, 1)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'A43-123321', N'Nissan', N'Nissan', 9, 1, 0)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'A43-123456', N'Toyota1', N'Toyota', 1, 1, 1)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'A43-555555', NULL, NULL, 9, 1, 1)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'A43-555556', NULL, NULL, 10, 1, 0)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'A43-555558', NULL, NULL, 9, 1, 0)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'A43-987654', N'Honda1', N'Honda', 1, 1, 0)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'B43-112233', NULL, NULL, 9, 2, 0)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'B43-559977', NULL, NULL, 11, 2, 0)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'B43-852963', N'Huyndai', N'Huyndai', 9, 2, 1)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'B43-999999', N'Huyndai1', N'Huyndai', 1, 3, 0)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'C43-559944', N'', N'', 9, 3, 0)
GO
SET IDENTITY_INSERT [dbo].[VehicleTypes] ON 

INSERT [dbo].[VehicleTypes] ([Id], [TypeName], [PricePerHour], [PricePerDay], [PricePerWeek], [PricePerMonth], [PricePerYear]) VALUES (1, N'Car', 10000, 100000, 400000, 1200000, 6000000)
INSERT [dbo].[VehicleTypes] ([Id], [TypeName], [PricePerHour], [PricePerDay], [PricePerWeek], [PricePerMonth], [PricePerYear]) VALUES (2, N'Bus', 20000, 200000, 800000, 2400000, 12000000)
INSERT [dbo].[VehicleTypes] ([Id], [TypeName], [PricePerHour], [PricePerDay], [PricePerWeek], [PricePerMonth], [PricePerYear]) VALUES (3, N'Truck', 30000, 300000, 1200000, 3600000, 18000000)
SET IDENTITY_INSERT [dbo].[VehicleTypes] OFF
GO
SET IDENTITY_INSERT [dbo].[Wards] ON 

INSERT [dbo].[Wards] ([Id], [Name], [DistrictId]) VALUES (1, N'Thanh Bình', 1)
INSERT [dbo].[Wards] ([Id], [Name], [DistrictId]) VALUES (2, N'Thuận Phước', 1)
SET IDENTITY_INSERT [dbo].[Wards] OFF
GO
ALTER TABLE [dbo].[Accounts]  WITH CHECK ADD  CONSTRAINT [FK_Accounts_Users_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Accounts] CHECK CONSTRAINT [FK_Accounts_Users_UserId]
GO
ALTER TABLE [dbo].[AccountTokens]  WITH CHECK ADD  CONSTRAINT [FK_AccountTokens_Users_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AccountTokens] CHECK CONSTRAINT [FK_AccountTokens_Users_UserId]
GO
ALTER TABLE [dbo].[Districts]  WITH CHECK ADD  CONSTRAINT [FK_Districts_Cities_CityId] FOREIGN KEY([CityId])
REFERENCES [dbo].[Cities] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Districts] CHECK CONSTRAINT [FK_Districts_Cities_CityId]
GO
ALTER TABLE [dbo].[Invoices]  WITH CHECK ADD  CONSTRAINT [FK_Invoices_Slots_SlotId] FOREIGN KEY([SlotId])
REFERENCES [dbo].[Slots] ([Id])
GO
ALTER TABLE [dbo].[Invoices] CHECK CONSTRAINT [FK_Invoices_Slots_SlotId]
GO
ALTER TABLE [dbo].[Invoices]  WITH CHECK ADD  CONSTRAINT [FK_Invoices_Vehicles_VehicleId] FOREIGN KEY([VehicleId])
REFERENCES [dbo].[Vehicles] ([Id])
GO
ALTER TABLE [dbo].[Invoices] CHECK CONSTRAINT [FK_Invoices_Vehicles_VehicleId]
GO
ALTER TABLE [dbo].[Slots]  WITH CHECK ADD  CONSTRAINT [FK_Slots_VehicleTypes_VehicleTypeId] FOREIGN KEY([VehicleTypeId])
REFERENCES [dbo].[VehicleTypes] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Slots] CHECK CONSTRAINT [FK_Slots_VehicleTypes_VehicleTypeId]
GO
ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [FK_Users_Cities_CityId] FOREIGN KEY([CityId])
REFERENCES [dbo].[Cities] ([Id])
GO
ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [FK_Users_Cities_CityId]
GO
ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [FK_Users_Districts_DistrictId] FOREIGN KEY([DistrictId])
REFERENCES [dbo].[Districts] ([Id])
GO
ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [FK_Users_Districts_DistrictId]
GO
ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [FK_Users_Wards_WardId] FOREIGN KEY([WardId])
REFERENCES [dbo].[Wards] ([Id])
GO
ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [FK_Users_Wards_WardId]
GO
ALTER TABLE [dbo].[Vehicles]  WITH CHECK ADD  CONSTRAINT [FK_Vehicles_Users_UserID] FOREIGN KEY([UserID])
REFERENCES [dbo].[Users] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Vehicles] CHECK CONSTRAINT [FK_Vehicles_Users_UserID]
GO
ALTER TABLE [dbo].[Vehicles]  WITH CHECK ADD  CONSTRAINT [FK_Vehicles_VehicleTypes_VehicleTypeId] FOREIGN KEY([VehicleTypeId])
REFERENCES [dbo].[VehicleTypes] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Vehicles] CHECK CONSTRAINT [FK_Vehicles_VehicleTypes_VehicleTypeId]
GO
ALTER TABLE [dbo].[Wards]  WITH CHECK ADD  CONSTRAINT [FK_Wards_Districts_DistrictId] FOREIGN KEY([DistrictId])
REFERENCES [dbo].[Districts] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Wards] CHECK CONSTRAINT [FK_Wards_Districts_DistrictId]
GO
