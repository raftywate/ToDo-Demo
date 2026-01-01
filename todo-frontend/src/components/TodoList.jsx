import TodoItem from "./TodoItem";

export default function TodoList({ todos, onDelete }) {
  return (
    <ul>
      {todos.map(t => (
        <TodoItem key={t.id} todo={t} onDelete={onDelete} />
      ))}
    </ul>
  );
}
