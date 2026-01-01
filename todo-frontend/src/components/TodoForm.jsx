import { useState } from "react";
import { createTodo } from "../services/TodoService";

export default function TodoForm({ onAdd }) {
    const [title, setTitle] = useState("");
    const [error, setError] = useState("");
    const [priority, setPriority] = useState("");
    const [category, setCategory] = useState("");



    const submit = async (e) => {
        e.preventDefault();

        if (!priority || !category) {
            setError("Please select priority and category");
            return;
        }

        try {
            await createTodo({
                title,
                isCompleted: false,
                priority,
                category
            });
            setTitle("");
            setPriority("");
            setCategory("");
            setError("");
            onAdd();
        } catch (err) {
            setError(err.message || "Invalid input");
        }
    };


    return (
        <form onSubmit={submit}>
            <h3>Add Todo</h3>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />

            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                required
            >
                <option value="" disabled>
                    Select Priority
                </option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>

            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
            >
                <option value="" disabled>
                    Select Category
                </option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
            </select>



            <button>Add</button>
        </form>
    );
}
