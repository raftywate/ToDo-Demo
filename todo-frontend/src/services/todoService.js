const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getTodos(search = "", category = "") {
  let url = BASE_URL;

  const params = [];
  if (search) params.push(`search=${search}`);
  if (category !== "") params.push(`category=${category}`);

  if (params.length) url += "?" + params.join("&");

  const res = await fetch(url);
  if (!res.ok) throw await res.json();
  return res.json();
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

export async function deleteTodo(id) {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw await res.json();
}
