using UserSystem.Models;

namespace UserSystem.Repository.Interfaces
{
    public interface IUserRepository
    {
        Task<List<UserModel>> FindAllUsers();
        Task<UserModel> FindById(int id);
        Task<UserModel> InsertUser(UserModel usuario);
        Task<UserModel> UpdateUser(UserModel usuario, int id);
        Task<bool> DeleteUser(int id);
    }
}
