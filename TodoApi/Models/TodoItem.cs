using System.ComponentModel.DataAnnotations;
using TodoApi.Models.Enums;

namespace TodoApi.Models {
    public class TodoItem {
        public int Id { get; set; }
        [Required]
        public string Title { get; set; } = string.Empty;
        public bool IsCompleted { get; set; }
        [EnumDataType(typeof(PriorityLevel))]
        public PriorityLevel Priority { get; set; }
        [EnumDataType(typeof(ToDoCategory))]
        public ToDoCategory Category { get; set; }
    }
}