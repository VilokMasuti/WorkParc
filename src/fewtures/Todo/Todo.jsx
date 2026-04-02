import { CheckCircle2, Circle, Pencil, Plus, Trash2, XCircle } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

const STORAGE_KEY = "workparc.todos.v1";

const Todo = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [filter, setFilter] = useState("all"); // all | completed | incomplete

  const inputRef = useRef(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) setItems(parsed);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const stats = useMemo(() => {
    const total = items.length;
    const completed = items.filter((t) => t.completed).length;
    const active = total - completed;
    return { total, completed, active };
  }, [items]);

  const filteredItems = useMemo(() => {
    return items.filter((t) => {
      if (filter === "completed") return t.completed;
      if (filter === "incomplete") return !t.completed;
      return true;
    });
  }, [items, filter]);

  const focusInput = () => queueMicrotask(() => inputRef.current?.focus?.());

  const onSubmit = (e) => {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;

    if (editingId) {
      setItems((prev) => prev.map((t) => (t.id === editingId ? { ...t, text: value } : t)));
      setEditingId(null);
      setText("");
      focusInput();
      return;
    }

    const newItem = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      text: value,
      completed: false,
      createdAt: Date.now(),
    };
    setItems((prev) => [newItem, ...prev]);
    setText("");
    focusInput();
  };

  
  const toggle = (id) => setItems((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  
  const del = (id) => setItems((prev) => prev.filter((t) => t.id !== id));
  
  const startEdit = (id) => {
    const item = items.find((t) => t.id === id);
    if (!item) return;
    setEditingId(id);
    setText(item.text);
    focusInput();
  };
  
  const cancelEdit = () => {
    setEditingId(null);
    setText("");
    focusInput();
  };
  
  
  const clearCompleted = () => setItems((prev) => prev.filter((t) => !t.completed));

  return (
    <section className="mx-auto w-full max-w-3xl rounded-2xl border border-zinc-400 bg-white/95 shadow-2xl backdrop-blur px-6 py-6 text-zinc-950">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold  tracking-tight">Todo</h1>
          <p className="mt-1 text-sm text-zinc-600">
            {stats.active} active · {stats.completed} completed · {stats.total} total
          </p>
        </div>

        <button
          type="button"
          onClick={clearCompleted}
          disabled={stats.completed === 0}
          className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Trash2 size={16} />
          Clear completed
        </button>
      </header>

      <section className="pt-6 flex flex-col gap-5">
        <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            ref={inputRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a task…"
            className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 shadow-sm outline-none placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-4 focus:ring-zinc-200"
          />

          <div className="flex gap-2 sm:justify-end">
            {editingId && (
              <button
                type="button"
                onClick={cancelEdit}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
              >
                <XCircle size={18} />
                Cancel
              </button>
            )}
            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-zinc-950 px-5 text-sm font-semibold text-white hover:bg-zinc-800"
            >
              {editingId ? <Pencil size={18} /> : <Plus size={18} />}
              {editingId ? "Update" : "Add"}
            </button>
          </div>
        </form>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              filter === "all" ? "bg-zinc-950 text-white" : "bg-zinc-100 text-zinc-800 hover:bg-zinc-200"
            }`}
          >
            All
          </button>
          <button
            type="button"
            onClick={() => setFilter("completed")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              filter === "completed"
                ? "bg-zinc-950 text-white"
                : "bg-zinc-100 text-zinc-800 hover:bg-zinc-200"
            }`}
          >
            Completed
          </button>
          <button
            type="button"
            onClick={() => setFilter("incomplete")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              filter === "incomplete"
                ? "bg-zinc-950 text-white"
                : "bg-zinc-100 text-zinc-800 hover:bg-zinc-200"
            }`}
          >
            Incomplete
          </button>
        </div>

        <ul className="w-full flex flex-col gap-2">
          {filteredItems.length === 0 ? (
            <li className="rounded-xl border border-dashed border-zinc-200 bg-zinc-50 px-4 py-6 text-center text-sm text-zinc-600">
              No tasks here. Add one above.
            </li>
          ) : (
            filteredItems.map((t) => (
              <li
                key={t.id}
                className="group flex items-center justify-between gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 shadow-sm"
              >
                <button type="button" onClick={() => toggle(t.id)} className="inline-flex items-center gap-3 text-left">
                  {t.completed ? (
                    <CheckCircle2 className="text-emerald-600" size={20} />
                  ) : (
                    <Circle className="text-zinc-400 group-hover:text-zinc-500" size={20} />
                  )}
                  <span className={`text-base ${t.completed ? "text-zinc-500 line-through" : "text-zinc-950"}`}>
                    {t.text}
                  </span>
                </button>

                <div className="flex items-center gap-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition">
                  <button
                    type="button"
                    onClick={() => startEdit(t.id)}
                    className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100"
                  >
                    <Pencil size={16} />
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => del(t.id)}
                    className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-red-700 hover:bg-red-50"
                  >
                    <Trash2 size={16} />
                    Delete
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </section>
    </section>
  );
};

export default Todo;
