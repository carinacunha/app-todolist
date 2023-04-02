using TaskSystem.Models;

namespace TaskSystem.Repository.Interfaces
{
    public interface ITaskRepository
    {
        Task<List<TaskModel>> FindAllTasks();
        Task<TaskModel> FindById(int id);
        Task<TaskModel> InsertTask(TaskModel tarefa);
        Task<TaskModel> UpdateTask(TaskModel tarefa, int id);
        Task<bool> DeleteTask(int id);
    }
}
