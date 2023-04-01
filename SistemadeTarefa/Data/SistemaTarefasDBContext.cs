using Microsoft.EntityFrameworkCore;
using SistemadeTarefa.Models;
using SistemadeTarefas.Models;

namespace SistemadeTarefa.Data
{
    public class SistemaTarefasDBContext : DbContext
    {
        public SistemaTarefasDBContext(DbContextOptions<SistemaTarefasDBContext> options)
            :base(options)
        {
        }
        public DbSet<UsuarioModel> Usuarios { get; set; }
        public DbSet<TarefaModel> Tarefas { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }

