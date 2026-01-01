using Microsoft.EntityFrameworkCore;
using TodoApi.Data;
using TodoApi.Models;
using TodoApi.Models.Enums;

namespace TodoApi.Repositories {
    public class TodoRepository : ITodoRepository {
        private readonly TodoDbContext _context;

        public TodoRepository(TodoDbContext context) {
            _context = context;
        }

        public async Task<List<TodoItem>> GetAllAsync(string? search, ToDoCategory? category) {
            var query = _context.Todos.AsQueryable();

            if (!string.IsNullOrWhiteSpace(search))
                query = query.Where(t => t.Title.Contains(search));

            if (category.HasValue)
                query = query.Where(t => t.Category == category);

            return await query.ToListAsync();
        }

        public async Task<TodoItem?> GetByIdAsync(int id)
            => await _context.Todos.FindAsync(id);

        public async Task<TodoItem> AddAsync(TodoItem todo) {
            _context.Todos.Add(todo);
            await _context.SaveChangesAsync();
            return todo;
        }

        public async Task UpdateAsync(TodoItem todo) {
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(TodoItem todo) {
            _context.Todos.Remove(todo);
            await _context.SaveChangesAsync();
        }
    }
}
