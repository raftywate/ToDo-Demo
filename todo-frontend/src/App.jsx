import { useEffect, useState } from "react";
import { getTodos, deleteTodo } from "./services/TodoService";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const loadTodos = async () => {
    const data = await getTodos(search, category);
    setTodos(data);
  };

  useEffect(() => {
    loadTodos();
  }, [search, category]);

  const remove = async (id) => {
    await deleteTodo(id);
    loadTodos();
  };

  return (
    <div className="container">
      <h1>Todo App</h1>

      {/* Search */}
      <input
        placeholder="Search todos"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "100%", marginBottom: "12px" }}
      />

      {/* Category filters */}
      <div className="filter-buttons" style={{ marginBottom: "20px" }}>
        <button onClick={() => setCategory("")}>All</button>
        <button onClick={() => setCategory("Personal")}>Personal</button>
        <button onClick={() => setCategory("Work")}>Work</button>
      </div>

      {/* Add Todo */}
      <TodoForm onAdd={loadTodos} />

      {/* Todo List */}
      <TodoList todos={todos} onDelete={remove} />
    </div>
  );
}
