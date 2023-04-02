using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UserSystem.Models;
using UserSystem.Repository.Interfaces;

namespace TaskSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        public UserController(IUserRepository userRepository) {
            userRepository = userRepository;
        }
        [HttpGet]
        public async Task <ActionResult<List<UserModel>>> GetAll() 
        {
            List<UserModel> users = await _userRepository.FindAllUsers();
            return Ok(users);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<UserModel>>> GetById(int id)
        {
            UserModel user = await _userRepository.FindById(id);
            return Ok(user);
        }

        [HttpPost]
        public async Task<ActionResult<UserModel>> Insert([FromBody] UserModel userModel)
        {
            UserModel user = await _userRepository.InsertUser(userModel);
            return Ok(user);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<UserModel>> Update([FromBody] UserModel userModel, int id)
        {
            userModel.id = id;
            UserModel user = await _userRepository.UpdateUser(userModel, id);
            return Ok(user);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<UserModel>> Delete(int id)
        {
            bool deleted = await _userRepository.DeleteUser(id);
            return Ok(deleted);
        }
    }
}
