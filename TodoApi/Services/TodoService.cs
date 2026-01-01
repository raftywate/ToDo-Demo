using TodoApi.Exceptions;
using TodoApi.Models;
using TodoApi.Models.Enums;
using TodoApi.Repositories;

namespace TodoApi.Services {
    public class TodoService : ITodoService {
        private readonly ITodoRepository _repository;

        public TodoService(ITodoRepository repository) {
            _repository = repository;
        }

        public async Task<List<TodoItem>> GetTodosAsync(string? search, ToDoCategory? category)
            => await _repository.GetAllAsync(search, category);

        public async Task<TodoItem> GetTodoByIdAsync(int id)
            => await _repository.GetByIdAsync(id)
               ?? throw new Exception("Todo not found.");

        public async Task<TodoItem> CreateTodoAsync(TodoItem todo) {
            ValidateEnums(todo);
            return await _repository.AddAsync(todo);
        }

        public async Task UpdateTodoAsync(int id, TodoItem updatedTodo) {
            ValidateEnums(updatedTodo);
            var todo = await GetTodoByIdAsync(id);

            todo.Title = updatedTodo.Title;
            todo.IsCompleted = updatedTodo.IsCompleted;
            todo.Priority = updatedTodo.Priority;
            todo.Category = updatedTodo.Category;

            await _repository.UpdateAsync(todo);
        }

        public async Task DeleteTodoAsync(int id) {
            var todo = await GetTodoByIdAsync(id);
            await _repository.DeleteAsync(todo);
        }

        private void ValidateEnums(TodoItem todo) {
            if (!Enum.IsDefined(typeof(PriorityLevel), todo.Priority))
                throw new DomainValidationException("Invalid priority value.");

            if (!Enum.IsDefined(typeof(ToDoCategory), todo.Category))
                throw new DomainValidationException("Invalid category value.");
        }
    }
}
