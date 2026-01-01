# Todo Application (ASP.NET Core + React)

A full-stack Todo application built using **ASP.NET Core Web API** and **React (Vite)**.

This project focuses on **clean architecture, SOLID principles, validation, and maintainable code**, as required by the assignment guidelines.

---

## Features

- Create, Read, Update, Delete (CRUD) todo items
- Search todos by title
- Filter todos by category (Work / Personal)
- Priority levels (Low, Medium, High)
- Backend validation for invalid input
- Centralized exception handling
- Clean separation of concerns
- Minimal, readable user interface

---

## Tech Stack

### Backend

- ASP.NET Core Web API (.NET 9)
- Entity Framework Core
- SQLite
- Controller → Service → Repository architecture
- Custom domain exceptions + global exception middleware

### Frontend

- React (Vite)
- JavaScript
- Fetch API
- Environment-based configuration using `.env`

---

## Project Structure

```
root
├── TodoApi # Backend (.NET Web API)
└── todo-frontend # Frontend (React)
```


## Backend Architecture Overview

- **Controllers**Handle HTTP requests and responses.
- **Services**Contain business logic and domain validation.
- **Repositories**Handle database access using Entity Framework Core.
- **Middleware**
  Centralized exception handling for consistent error responses.

This structure follows **SOLID principles** and ensures maintainability and testability.

---

## How to Run the Project Locally?

### Prerequisites

- .NET SDK (9.0 or compatible)
- Node.js (18+ recommended)
- npm

---

### Backend Setup

```bash
cd TodoApi
dotnet restore
dotnet ef database update
dotnet run
```


The backend will run on a local port such as:

<pre class="overflow-visible! px-0!" data-start="2055" data-end="2084"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(--spacing(9)+var(--header-height))] @w-xl/main:top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>http:</span><span>//localhost:5042</span></span></code></div></div></pre>

### Frontend Setup

```
cd todo-frontend
npm install
npm run dev
```

The frontend will run on:

<pre class="overflow-visible! px-0!" data-start="2191" data-end="2220"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(--spacing(9)+var(--header-height))] @w-xl/main:top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>http:</span><span>//localhost:5173</span></span></code></div></div></pre>


## Environment Configuration

Create a `.env` file inside the `todo-frontend` directory:

<pre class="overflow-visible! px-0!" data-start="2317" data-end="2377"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(--spacing(9)+var(--header-height))] @w-xl/main:top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-env"><span>VITE_API_BASE_URL=http://localhost:5042/api/todos
</span></code></div></div></pre>
