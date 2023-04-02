using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SistemadeTarefas.Models;


namespace SistemadeTarefa.Data.Map
{
    public class TarefaMap : IEntityTypeConfiguration<TarefaModel>
    {
        public void Configure(EntityTypeBuilder<TarefaModel> builder)
        {
            builder.HasKey(x => x.id);
            builder.Property(x => x.title).IsRequired().HasMaxLength(255);
            builder.Property(x => x.description).HasMaxLength(155);
            builder.Property(x => x.doneDate).IsRequired();
            //builder.Property(x => x.UsuarioId);

            //builder.HasOne(x => x.Usuario);

        }
    }
}
