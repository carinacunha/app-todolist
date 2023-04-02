using Microsoft.EntityFrameworkCore;
using SistemadeTarefa.Data;
using SistemadeTarefas.Models;
using SistemadeTarefa.Repositorios.Interfaces;

namespace SistemadeTarefa.Repositorios
{
    public class TarefaRepositorio : ITarefaRepositorio
    {   
        private readonly SistemaTarefasDBContext _dbContext;
        public TarefaRepositorio(SistemaTarefasDBContext sistemaTarefasDBContext) 
        { 
            _dbContext = sistemaTarefasDBContext;
        }
        public async Task<TarefaModel> BucarPorId(int id)
        {
            return await _dbContext.Tarefas.FirstOrDefaultAsync(x => x.id == id);
        }

        public async Task<List<TarefaModel>> BuscarTodasTarefas()
        {
            return await _dbContext.Tarefas.ToListAsync();
        }

        public async Task<TarefaModel> Adicionar(TarefaModel tarefa)
        {
            await _dbContext.Tarefas.AddAsync(tarefa);
            await _dbContext.SaveChangesAsync();

            return tarefa;
        }

        public async Task<TarefaModel> Atualizar(TarefaModel tarefa, int id)
        {
            TarefaModel tarefaPorId = await BucarPorId(id);
            if (tarefaPorId == null)
            {
                throw new Exception($"Tarefa para o ID: {id} não foi encontrado no banco de dados.");
            }
            tarefaPorId.title = tarefa.title;
            tarefaPorId.description = tarefa.description;
            tarefaPorId.doneDate = tarefa.doneDate;
            //tarefaPorId.UsuarioId = tarefa.UsuarioId;

            _dbContext.Tarefas.Update(tarefaPorId);
            await _dbContext.SaveChangesAsync();

            return tarefaPorId;
        }

        public async Task<bool> Apagar(int id)
        {
            TarefaModel tarefaPorId = await BucarPorId(id);
            if (tarefaPorId == null)
            {
                throw new Exception($"Tarefa para o ID: {id} não foi encontrado no banco de dados.");
            }

            _dbContext.Tarefas.Remove(tarefaPorId);
            await _dbContext.SaveChangesAsync();
            return true;
        }


    }
}
