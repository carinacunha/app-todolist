using Microsoft.EntityFrameworkCore;
using TaskSystem.Data;
using UserSystem.Models;
using UserSystem.Repository.Interfaces;

namespace UserSystem.Repository
{
    public class UserRepository : IUserRepository
    {   
        private readonly DBContext _dbContext;
        public UserRepository(DBContext userSystemDBContext) 
        { 
            _dbContext = userSystemDBContext;
        }
        public async Task<UserModel> FindById(int id)
        {
            return await _dbContext.Users.FirstOrDefaultAsync(x => x.id == id);
        }

        public async Task<List<UserModel>> FindAllUsers()
        {
            return await _dbContext.Users.ToListAsync();
        }

        public async Task<UserModel> InsertUser(UserModel user)
        {
            await _dbContext.Users.AddAsync(user);
            await _dbContext.SaveChangesAsync();

            return user;
        }

        public async Task<UserModel> UpdateUser(UserModel user, int id)
        {
            UserModel userFound = await FindById(id);
            if (userFound == null)
            {
                throw new Exception($"Usuário para o ID: {id} não foi encontrado no banco de dados.");
            }
            userFound.name = user.name;
            userFound.email = user.email;

            _dbContext.Users.Update(userFound);
            await _dbContext.SaveChangesAsync();

            return userFound;
        }

        public async Task<bool> DeleteUser(int id)
        {
            UserModel userFound = await FindById(id);
            if (userFound == null)
            {
                throw new Exception($"Usuário para o ID: {id} não foi encontrado no banco de dados.");
            }

            _dbContext.Users.Remove(userFound);
            await _dbContext.SaveChangesAsync();
            return true;
        }


    }
}
