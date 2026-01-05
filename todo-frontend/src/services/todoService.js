const BASE_URL = import.meta.env.VITE_API_BASE_URL;


export async function getTodos(search = "", category = "", priority = "") {
  let url = import.meta.env.VITE_API_BASE_URL;

  const params = new URLSearchParams();

  if (search) params.append("search", search);
  if (category !== "") params.append("category", category);
  if (priority !== "") params.append("priority", priority);

  const finalUrl = params.toString()
    ? `${url}?${params.toString()}`
    : url;

  console.log("FETCHING:", finalUrl);

  const res = await fetch(finalUrl);
  if (!res.ok) {
    throw new Error("Failed to fetch todos");
  }

  return await res.json();
}


export async function createTodo(todo) {
    console.log(import.meta.env.VITE_API_BASE_URL);

  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo)
  });

  if (!res.ok) throw await res.json();
  return res.json();
}

export async function updateTodo(todo) {
  console.log("UPDATE TODO API CALLED", todo);

  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/${todo.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo)
  });

  if (!res.ok) throw new Error("Update failed");
}


export async function deleteTodo(id) {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw await res.json();
}
