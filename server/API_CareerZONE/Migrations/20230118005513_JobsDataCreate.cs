using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API_CareerZONE.Migrations
{
    public partial class JobsDataCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Jobs",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    JobTitle = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    JobPostedDay = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    JobExpirationDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    JobCompany = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    JobLocation = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    JobType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    JobLevel = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    JobCategory = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    JobOfferedSalary = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    JobExperience = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    JobDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    JobResponsibility = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    JobSkills = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    JobBenefits = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Hr = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Jobs", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Jobs");
        }
    }
}
