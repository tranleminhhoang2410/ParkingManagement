USE [master]
GO
/****** Object:  Database [ParkingDB]    Script Date: 9/2/2022 10:58:14 PM ******/
CREATE DATABASE [ParkingDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'ParkingDB', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\ParkingDB.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'ParkingDB_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\ParkingDB_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [ParkingDB] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ParkingDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ParkingDB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [ParkingDB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [ParkingDB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [ParkingDB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [ParkingDB] SET ARITHABORT OFF 
GO
ALTER DATABASE [ParkingDB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [ParkingDB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [ParkingDB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [ParkingDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [ParkingDB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [ParkingDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [ParkingDB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [ParkingDB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [ParkingDB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [ParkingDB] SET  DISABLE_BROKER 
GO
ALTER DATABASE [ParkingDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [ParkingDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [ParkingDB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [ParkingDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [ParkingDB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [ParkingDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [ParkingDB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [ParkingDB] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [ParkingDB] SET  MULTI_USER 
GO
ALTER DATABASE [ParkingDB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [ParkingDB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [ParkingDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [ParkingDB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [ParkingDB] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [ParkingDB] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [ParkingDB] SET QUERY_STORE = OFF
GO
USE [ParkingDB]
GO
/****** Object:  Table [dbo].[Accounts]    Script Date: 9/2/2022 10:58:14 PM ******/
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
/****** Object:  Table [dbo].[Cities]    Script Date: 9/2/2022 10:58:14 PM ******/
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
/****** Object:  Table [dbo].[Districts]    Script Date: 9/2/2022 10:58:14 PM ******/
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
/****** Object:  Table [dbo].[Invoices]    Script Date: 9/2/2022 10:58:14 PM ******/
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
/****** Object:  Table [dbo].[Slots]    Script Date: 9/2/2022 10:58:14 PM ******/
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
/****** Object:  Table [dbo].[Users]    Script Date: 9/2/2022 10:58:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[Email] [nvarchar](max) NULL,
	[Phone] [nvarchar](max) NULL,
	[Feedback] [nvarchar](max) NULL,
	[CityId] [int] NULL,
	[DistrictId] [int] NULL,
	[WardId] [int] NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ValidTokens]    Script Date: 9/2/2022 10:58:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ValidTokens](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Value] [nvarchar](max) NULL,
	[UserId] [int] NOT NULL,
 CONSTRAINT [PK_ValidTokens] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Vehicles]    Script Date: 9/2/2022 10:58:14 PM ******/
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
/****** Object:  Table [dbo].[VehicleTypes]    Script Date: 9/2/2022 10:58:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VehicleTypes](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[TypeName] [nvarchar](max) NULL,
	[PricePerHour] [float] NOT NULL,
	[PricePerMonth] [float] NOT NULL,
	[PricePerWeek] [float] NOT NULL,
	[PricePerDay] [float] NOT NULL,
	[PricePerYear] [float] NOT NULL,
 CONSTRAINT [PK_VehicleTypes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Wards]    Script Date: 9/2/2022 10:58:14 PM ******/
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
SET IDENTITY_INSERT [dbo].[Accounts] ON 

INSERT [dbo].[Accounts] ([Id], [Username], [Password], [Role], [UserId]) VALUES (1, N'hoangtest', N'E10ADC3949BA59ABBE56E057F20F883E', N'User', 1)
INSERT [dbo].[Accounts] ([Id], [Username], [Password], [Role], [UserId]) VALUES (2, N'hoang2', N'E10ADC3949BA59ABBE56E057F20F883E', N'User', 2)
SET IDENTITY_INSERT [dbo].[Accounts] OFF
GO
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A1', 0, 1)
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
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A23', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A24', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A25', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A26', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A27', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A28', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A29', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A3', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A30', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A31', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A32', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A33', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A34', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A35', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A36', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A37', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A38', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A39', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A4', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'A40', 0, 1)
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
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B23', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B24', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B25', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B26', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B27', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B28', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B29', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B3', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B30', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B31', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B32', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B33', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B34', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B35', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B36', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B37', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B38', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B39', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B4', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'B40', 0, 1)
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
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C23', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C24', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C25', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C26', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C27', 0, 1)
GO
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C28', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C29', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C3', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C30', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C31', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C32', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C33', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C34', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C35', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C36', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C37', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C38', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C39', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C4', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C40', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C5', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C6', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C7', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C8', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'C9', 0, 1)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D1', 0, 2)
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
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D23', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D24', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D25', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D26', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D27', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D28', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D29', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D3', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D30', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D31', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D32', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D33', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D34', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D35', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D36', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D37', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D38', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D39', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D4', 0, 2)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'D40', 0, 2)
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
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E15', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E16', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E17', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E18', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E19', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E2', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E20', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E21', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E22', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E23', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E24', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E25', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E26', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E27', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E28 ', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E29', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E3', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E30', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E31', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E32', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E33', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E34', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E35', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E36', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E37', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E38', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E39', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E4', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E40', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E5', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E6', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E7', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E8', 0, 3)
INSERT [dbo].[Slots] ([Id], [Status], [VehicleTypeId]) VALUES (N'E9', 0, 3)
GO
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([Id], [Name], [Email], [Phone], [Feedback], [CityId], [DistrictId], [WardId]) VALUES (1, N'Trần Lê Minh Hoàng', N'hoangtlm2410@gmail.com', N'0794616145', NULL, NULL, NULL, NULL)
INSERT [dbo].[Users] ([Id], [Name], [Email], [Phone], [Feedback], [CityId], [DistrictId], [WardId]) VALUES (2, N'Hoang Tran', N'hoangtlm2410@gmail.com', N'0794616145', NULL, NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
SET IDENTITY_INSERT [dbo].[ValidTokens] ON 

INSERT [dbo].[ValidTokens] ([Id], [Value], [UserId]) VALUES (1, N'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwicm9sZSI6IlVzZXIiLCJuYmYiOjE2NjIxMjY5MzEsImV4cCI6MTY2MjEzNzczMSwiaWF0IjoxNjYyMTI2OTMxfQ.LkqxF_lYB48cuqTWEaq9ite4OD8-MSi2xlfN6XDI1k0', 1)
INSERT [dbo].[ValidTokens] ([Id], [Value], [UserId]) VALUES (2, N'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIyIiwicm9sZSI6IlVzZXIiLCJuYmYiOjE2NjIxMDMyOTMsImV4cCI6MTY2MjExNDA5MywiaWF0IjoxNjYyMTAzMjkzfQ.Jy2vTzphk4qMH77nrChtGXs-s_6U8PkkcnKkvMM_v5U', 2)
SET IDENTITY_INSERT [dbo].[ValidTokens] OFF
GO
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'43A-111111', N'City', N'Honda', 1, 1, 0)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'43A-111112', N'Civic', N'Honda', 1, 1, 0)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'43A-111113', N'City', N'Honda', 1, 1, 0)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'43A-111114', N'City', N'Honda', 1, 1, 0)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'43A-111115', N'City', N'Honda', 1, 1, 0)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'43A-111116', N'City', N'Honda', 1, 1, 0)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'43A-111117', N'City', N'Honda', 1, 1, 0)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'43A-111118', N'City', N'Honda', 1, 1, 0)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'43A-111119', N'City', N'Honda', 1, 1, 0)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'43A-111120', N'City', N'Honda', 1, 1, 0)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'43A-111121', N'City', N'Honda', 1, 1, 0)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'43A-111122', N'City', N'Honda', 1, 1, 0)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'43A-111123', N'City', N'Honda', 1, 1, 0)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'43A-111124', N'City', N'Honda', 1, 1, 0)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'43A-111125', N'City', N'Honda', 1, 1, 0)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'43A-111126', N'City', N'Honda', 1, 1, 0)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'43A-111127', N'City', N'Honda', 1, 1, 0)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'43A-111128', N'City', N'Honda', 1, 1, 0)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'43A-111129', N'City', N'Honda', 1, 1, 0)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'43A-111130', N'City', N'Honda', 1, 1, 0)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'43A-111131', N'City', N'Honda', 1, 1, 0)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'43A-111132', N'City', N'Honda', 1, 1, 0)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'43A-111133', N'City', N'Honda', 1, 1, 0)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'43A-111134', N'City', N'Honda', 1, 1, 0)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'43A-111135', N'City', N'Honda', 1, 1, 0)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'43A-111136', N'City', N'Honda', 1, 1, 0)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'43A-111137', N'City', N'Honda', 1, 1, 0)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'43A-111138', N'City', N'Honda', 1, 1, 0)
INSERT [dbo].[Vehicles] ([Id], [VehicleName], [VehicleBrand], [UserID], [VehicleTypeId], [IsParking]) VALUES (N'43A-111139', N'City', N'Honda', 1, 1, 0)
GO
SET IDENTITY_INSERT [dbo].[VehicleTypes] ON 

INSERT [dbo].[VehicleTypes] ([Id], [TypeName], [PricePerHour], [PricePerMonth], [PricePerWeek], [PricePerDay], [PricePerYear]) VALUES (1, N'Car', 10000, 1200000, 400000, 100000, 6000000)
INSERT [dbo].[VehicleTypes] ([Id], [TypeName], [PricePerHour], [PricePerMonth], [PricePerWeek], [PricePerDay], [PricePerYear]) VALUES (2, N'Bus', 20000, 2400000, 800000, 200000, 12000000)
INSERT [dbo].[VehicleTypes] ([Id], [TypeName], [PricePerHour], [PricePerMonth], [PricePerWeek], [PricePerDay], [PricePerYear]) VALUES (3, N'Truck', 30000, 3600000, 1200000, 300000, 18000000)
SET IDENTITY_INSERT [dbo].[VehicleTypes] OFF
GO
ALTER TABLE [dbo].[Invoices] ADD  DEFAULT ((0.0000000000000000e+000)) FOR [TotalPaid]
GO
ALTER TABLE [dbo].[Vehicles] ADD  DEFAULT (CONVERT([bit],(0))) FOR [IsParking]
GO
ALTER TABLE [dbo].[VehicleTypes] ADD  DEFAULT ((0.0000000000000000e+000)) FOR [PricePerMonth]
GO
ALTER TABLE [dbo].[VehicleTypes] ADD  DEFAULT ((0.0000000000000000e+000)) FOR [PricePerWeek]
GO
ALTER TABLE [dbo].[VehicleTypes] ADD  DEFAULT ((0.0000000000000000e+000)) FOR [PricePerDay]
GO
ALTER TABLE [dbo].[VehicleTypes] ADD  DEFAULT ((0.0000000000000000e+000)) FOR [PricePerYear]
GO
ALTER TABLE [dbo].[Accounts]  WITH CHECK ADD  CONSTRAINT [FK_Accounts_Users_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Accounts] CHECK CONSTRAINT [FK_Accounts_Users_UserId]
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
ALTER TABLE [dbo].[ValidTokens]  WITH CHECK ADD  CONSTRAINT [FK_ValidTokens_Users_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[ValidTokens] CHECK CONSTRAINT [FK_ValidTokens_Users_UserId]
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
USE [master]
GO
ALTER DATABASE [ParkingDB] SET  READ_WRITE 
GO
