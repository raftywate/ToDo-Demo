using Microsoft.AspNetCore.Mvc;
using TodoApi.Models;
using TodoApi.Models.Enums;
using TodoApi.Services;

namespace TodoApi.Controllers {
    [ApiController]
    [Route("api/[controller]")]
    public class TodosController : ControllerBase {
        private readonly ITodoService _service;

        public TodosController(ITodoService service) {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetTodos(string? search, ToDoCategory? category)
            => Ok(await _service.GetTodosAsync(search, category));

        [HttpGet("{id}")]
        public async Task<IActionResult> GetTodo(int id)
            => Ok(await _service.GetTodoByIdAsync(id));

        [HttpPost]
        public async Task<IActionResult> CreateTodo(TodoItem todo) {
            System.Console.WriteLine("Got a request");
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var created = await _service.CreateTodoAsync(todo);
            return CreatedAtAction(nameof(GetTodo), new { id = created.Id }, created);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTodo(int id, TodoItem todo) {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            await _service.UpdateTodoAsync(id, todo);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTodo(int id) {
            await _service.DeleteTodoAsync(id);
            return NoContent();
        }
    }
}
