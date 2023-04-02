using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SistemadeTarefa.Migrations
{
    public partial class UpdateNameCollum : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Tarefas",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "Nome",
                table: "Tarefas",
                newName: "title");

            migrationBuilder.RenameColumn(
                name: "Descricao",
                table: "Tarefas",
                newName: "description");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "id",
                table: "Tarefas",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "title",
                table: "Tarefas",
                newName: "Nome");

            migrationBuilder.RenameColumn(
                name: "description",
                table: "Tarefas",
                newName: "Descricao");
        }
    }
}
