using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TaskSystem.Models;


namespace TaskSystem.Data.Map
{
    public class TaskMap : IEntityTypeConfiguration<TaskModel>
    {
        public void Configure(EntityTypeBuilder<TaskModel> builder)
        {
            builder.HasKey(x => x.id);
            builder.Property(x => x.title).IsRequired().HasMaxLength(255);
            builder.Property(x => x.description).HasMaxLength(155);
            builder.Property(x => x.doneDate).IsRequired();

        }
    }
}
