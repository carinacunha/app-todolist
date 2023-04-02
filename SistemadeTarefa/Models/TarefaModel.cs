using SistemadeTarefa.Enums;
using SistemadeTarefa.Models;

namespace SistemadeTarefas.Models
{
    public class TarefaModel
    {
        public int id { get; set; }
        public string? title { get; set; }

        public string? description { get; set; }

        public DateTime? doneDate { get; set; }

        //public int? UsuarioId { get; set; }

        //public virtual UsuarioModel? Usuario { get; set; }
    }
}
