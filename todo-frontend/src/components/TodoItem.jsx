export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="todo-item">
      <div
        className={`todo-text ${
          todo.isCompleted ? "todo-completed" : ""
        }`}
      >
        <strong>{todo.title}</strong>
        <span> ({todo.priority}, {todo.category})</span>
      </div>

      <div className="todo-actions">
        <button onClick={() => onToggle(todo)}>
          {todo.isCompleted ? "Undo" : "Complete"}
        </button>

        <button onClick={() => onDelete(todo.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}
