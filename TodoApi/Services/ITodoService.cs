using TodoApi.Models;
using TodoApi.Models.Enums;

namespace TodoApi.Services {
    public interface ITodoService {
        Task<List<TodoItem>> GetTodosAsync(string? search, ToDoCategory? category, PriorityLevel? priority);
        Task<TodoItem> GetTodoByIdAsync(int id);
        Task<TodoItem> CreateTodoAsync(TodoItem todo);
        Task UpdateTodoAsync(int id, TodoItem updatedTodo);
        Task DeleteTodoAsync(int id);
    }
}
