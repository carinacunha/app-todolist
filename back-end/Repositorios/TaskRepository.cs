using Microsoft.EntityFrameworkCore;
using TaskSystem.Data;
using TaskSystem.Models;
using TaskSystem.Repository.Interfaces;


namespace TaskSystem.Repository
{
    public class TaskRepository : ITaskRepository
    {   
        private readonly DBContext _dbContext;
        public TaskRepository(DBContext taskSystemContext) 
        { 
            _dbContext = taskSystemContext;
        }
        public async Task<TaskModel> FindById(int id)
        {
            return await _dbContext.Tasks.FirstOrDefaultAsync(x => x.id == id);
        }

        public async Task<List<TaskModel>> FindAllTasks()
        {
            return await _dbContext.Tasks.ToListAsync();
        }

        public async Task<TaskModel> InsertTask(TaskModel task)
        {
            await _dbContext.Tasks.AddAsync(task);
            await _dbContext.SaveChangesAsync();

            return task;
        }

        public async Task<TaskModel> UpdateTask(TaskModel task, int id)
        {
            TaskModel taskById = await FindById(id);
            if (taskById == null)
            {
                throw new Exception($"Tarefa para o ID: {id} não foi encontrado no banco de dados.");
            }
            taskById.title = task.title;
            taskById.description = task.description;
            taskById.doneDate = task.doneDate;

            _dbContext.Tasks.Update(taskById);
            await _dbContext.SaveChangesAsync();

            return taskById;
        }

        public async Task<bool> DeleteTask(int id)
        {
            TaskModel taskById = await FindById(id);
            if (taskById == null)
            {
                throw new Exception($"Tarefa para o ID: {id} não foi encontrado no banco de dados.");
            }

            _dbContext.Tasks.Remove(taskById);
            await _dbContext.SaveChangesAsync();
            return true;
        }


    }
}
