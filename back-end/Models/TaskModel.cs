namespace TaskSystem.Models
{
    public class TaskModel
    {
        public int id { get; set; }
        public string? title { get; set; }

        public string? description { get; set; }

        public DateTime? doneDate { get; set; }

    }
}
