import { useEffect, useState } from "react";
import { getTodos, updateTodo, deleteTodo } from "./services/todoService";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");

  const loadTodos = async () => {
    const data = await getTodos(search, category, priority);
    //console.log("DATA FROM getTodos:", data);
    setTodos(data);
  };


  useEffect(() => {
    loadTodos();
  }, [search, category, priority]);


  const remove = async (id) => {
    await deleteTodo(id);
    loadTodos();
  };

  const toggle = async (todo) => {
    console.log("TOGGLE CALLED IN APP", todo);

    await updateTodo({
      ...todo,
      isCompleted: !todo.isCompleted
    });

    loadTodos();
  };


  return (
    <div className="app-container">
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

      <select value={priority} onChange={e => setPriority(e.target.value)}>
        <option value="">All Priorities</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>


      {/* Add Todo */}
      <TodoForm onAdd={loadTodos} />

      {/* Todo List */}
      <TodoList
        todos={todos}
        onToggle={toggle}
        onDelete={remove}
      />

    </div>
  );
}
