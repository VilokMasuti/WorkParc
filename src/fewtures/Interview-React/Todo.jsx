import { useState } from "react"

const Todo = () => {
  const [TodoText, setTodoText] = useState('')
  const [todo, setTodo] = useState([])
  const [editTodo, setEditTodo] = useState(null)
  const [filter, setFilter] = useState("all") // all | completed | incomplete

  // Add or update todo
  const handleTodo = (e) => {
    e.preventDefault()
    if (TodoText.trim() === "") return

    if (editTodo) {
      const updatedTodo = todo.map((to) =>
        to.id === editTodo ? { ...to, text: TodoText } : to
      )
      setTodo(updatedTodo)
      setEditTodo(null)
      setTodoText('')
    } else {
      const newTodo = {
        id: Date.now(),
        text: TodoText,
        completed: false,
      }
      setTodo([...todo, newTodo])
      setTodoText('')
    }
  }

  // Prefill input for editing
  const handleEdit = (id) => {
    const Edited = todo.find((t) => t.id === id)
    setEditTodo(id)
    setTodoText(Edited.text)
  }

  // Delete todo
  const handleDelete = (id) => {
    setTodo(todo.filter((t) => t.id !== id))
  }

  // Toggle complete/incomplete
  const handleToggle = (id) => {
    const updatedTodos = todo.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    )
    setTodo(updatedTodos)
  }

  // Filtered todos based on filter state
  const filteredTodos = todo.filter((t) => {
    if (filter === "completed") return t.completed
    if (filter === "incomplete") return !t.completed
    return true // all
  })

  return (
    <section className="m-16 w-[40rem] bg-sky-50 shadow-2xl min-h-[40rem] p-6 rounded-lg">
      <h1 className="text-4xl font-bold uppercase text-center underline">TODO LIST</h1>

      <section className="pt-10 flex flex-col items-center justify-center gap-6">
        {/* Input Row */}
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="ENTER TODO...!"
            className="w-[20rem] border border-black rounded bg-white text-black h-[2rem] px-2"
            value={TodoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
          <button
            onClick={handleTodo}
            className="px-4 py-2 rounded-md bg-black text-white"
          >
            {editTodo ? "Edit Todo" : "Add Todo"}
          </button>
        </div>

        {/* Filter Controls */}
        <div className="flex gap-3">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1 rounded-md ${filter === "all" ? "bg-blue-600 text-white" : "bg-gray-300"}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-3 py-1 rounded-md ${filter === "completed" ? "bg-blue-600 text-white" : "bg-gray-300"}`}
          >
            Completed
          </button>
          <button
            onClick={() => setFilter("incomplete")}
            className={`px-3 py-1 rounded-md ${filter === "incomplete" ? "bg-blue-600 text-white" : "bg-gray-300"}`}
          >
            Incomplete
          </button>
        </div>

        {/* Todo List */}
        <ul className="w-full flex flex-col gap-3 mt-5">
          {filteredTodos.map((t) => (
            <li
              key={t.id}
              className="flex justify-between items-center bg-white px-4 py-2 rounded shadow"
            >
              <span
                className={`text-2xl ${
                  t.completed ? "line-through text-gray-500" : "text-black"
                }`}
              >
                {t.text}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleToggle(t.id)}
                  className={`px-3 py-1 rounded-md ${
                    t.completed
                      ? "bg-yellow-500 hover:bg-yellow-600"
                      : "bg-green-600 hover:bg-green-700"
                  } text-white`}
                >
                  {t.completed ? "Mark Incomplete" : "Mark Complete"}
                </button>
                <button
                  onClick={() => handleEdit(t.id)}
                  className="px-3 py-1 rounded-md bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(t.id)}
                  className="px-3 py-1 rounded-md bg-red-600 hover:bg-red-700 text-white"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default Todo
