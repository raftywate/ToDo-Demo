export default function TodoItem({ todo, onDelete }) {
  return (
    <li className="todo-item">
      <div>
        <strong>{todo.title}</strong>
        <span className="todo-meta">
          ({todo.priority}, {todo.category})
        </span>
      </div>
      <button onClick={() => onDelete(todo.id)}>Completed</button>
    </li>
  );
}
