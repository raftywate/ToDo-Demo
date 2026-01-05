using TodoApi.Models;
using TodoApi.Models.Enums;

namespace TodoApi.Repositories {
    public interface ITodoRepository {
        Task<List<TodoItem>> GetAllAsync(string? search, ToDoCategory? category, PriorityLevel? priority);
        Task<TodoItem?> GetByIdAsync(int id);
        Task<TodoItem> AddAsync(TodoItem todo);
        Task UpdateAsync(TodoItem todo);
        Task DeleteAsync(TodoItem todo);
    }
}
