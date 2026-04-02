import { useState } from "react";

const columns = [
  {
    key: "todo",
    title: "To Do",
    eyebrow: "Queue",
    empty: "Add your first task to get the board moving.",
    tone: "from-amber-200 via-white to-orange-100",
    badge: "bg-amber-500/15 text-amber-900 ring-amber-500/20",
  },
  {
    key: "progress",
    title: "In Progress",
    eyebrow: "Focus",
    empty: "Tasks you move here will show your active work.",
    tone: "from-sky-200 via-white to-cyan-100",
    badge: "bg-sky-500/15 text-sky-900 ring-sky-500/20",
  },
  {
    key: "done",
    title: "Done",
    eyebrow: "Wins",
    empty: "Finished tasks land here automatically.",
    tone: "from-emerald-200 via-white to-teal-100",
    badge: "bg-emerald-500/15 text-emerald-900 ring-emerald-500/20",
  },
];

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const AddTask = () => {
    if (!text.trim()) return;

    const newTask = {
      id: Date.now(),
      title: text.trim(),
      status: "todo",
    };

    setTasks((pre) => [...pre, newTask]);
    setText("");
  };

  const DeleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  const MoveTask = (id) => {
  const move = tasks.map((task) => {
    if(task.id !== id) return task
    if(task.status ==='todo') return {...task,status:"progress"}
    if(task.status === 'progress') return {...task,status:"done"}
    return task
  })
  setTasks(move)
  };

  const groupedTasks = {
    todo: tasks.filter((task) => task.status === "todo"),
    progress: tasks.filter((task) => task.status === "progress"),
    done: tasks.filter((task) => task.status === "done"),
  };

  const getMoveLabel = (status) => {
    if (status === "todo") return "Start";
    if (status === "progress") return "Complete";
    return "Done";
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f4efe6] text-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.16),_transparent_30%),linear-gradient(180deg,_rgba(255,255,255,0.96),_rgba(244,239,230,0.96))]" />
      <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-white/50 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-amber-200/40 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-8 sm:px-8 lg:px-10">
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex w-fit items-center rounded-full border border-white/70 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-600 shadow-sm backdrop-blur">
              Premium Task Board
            </span>
            <div className="space-y-3">
              <h1 className="font-serif text-4xl leading-tight sm:text-5xl">
                Move work forward with a cleaner board.
              </h1>
              <p className="max-w-xl text-sm leading-6 text-slate-600 sm:text-base font-serif">
                Add a task, move it from queue to completion, and keep the
                flow simple. Your original status logic stays the same.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="rounded-md border border-white/70 bg-white/75 px-2 py-2 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                Total
              </p>
              <p className="mt-2 text-3xl font-semibold">{tasks.length}</p>
            </div>
            <div className="rounded-3xl border border-white/70 bg-white/75 px-5 py-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                Active
              </p>
              <p className="mt-2 text-3xl font-semibold">
                {groupedTasks.progress.length}
              </p>
            </div>
            <div className="col-span-2 rounded-3xl border border-white/70 bg-white/75 px-5 py-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur sm:col-span-1">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                Done
              </p>
              <p className="mt-2 text-3xl font-semibold">
                {groupedTasks.done.length}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8 rounded-[2rem] border border-white/70 bg-white/70 p-4 shadow-[0_20px_70px_rgba(15,23,42,0.12)] backdrop-blur sm:p-5">
          <div className="flex flex-col gap-3 lg:flex-row">
            <input
              placeholder="Enter task..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") AddTask();
              }}
              className="h-14 flex-1 rounded-2xl border border-slate-200/80 bg-white px-4 text-base text-slate-800 outline-none transition focus:border-slate-300 focus:ring-4 focus:ring-amber-200/40"
            />
            <button
              onClick={AddTask}
              className="h-14 rounded-2xl bg-slate-950 px-6 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-slate-800"
            >
              Add Task
            </button>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-6 xl:grid-cols-3">
          {columns.map((column) => {
            const items = groupedTasks[column.key];

            return (
              <article
                key={column.key}
                className="flex min-h-[24rem] flex-col rounded-[2rem] border border-white/70 bg-white/75 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur"
              >
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                      {column.eyebrow}
                    </p>
                    <h2 className="mt-2 font-serif text-3xl">{column.title}</h2>
                  </div>
                  <span
                    className={`inline-flex min-w-10 items-center justify-center rounded-full px-3 py-1 text-sm font-semibold ring-1 ${column.badge}`}
                  >
                    {items.length}
                  </span>
                </div>

                <div
                  className={`mb-5 rounded-3xl bg-gradient-to-br p-[1px] ${column.tone}`}
                >
                  <div className="rounded-[calc(1.5rem-1px)] bg-white/85 px-4 py-3 text-sm text-slate-600">
                    {column.empty}
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-3">
                  {items.length > 0 ? (
                    items.map((task) => (
                      <div
                        key={task.id}
                        className="rounded-[1.6rem] border border-slate-200/70 bg-white p-4 shadow-[0_14px_30px_rgba(15,23,42,0.08)]"
                      >
                        <div className="mb-4 flex items-start justify-between gap-3">
                          <p className="pr-2 text-base font-medium leading-6 text-slate-800">
                            {task.title}
                          </p>
                          <button
                            onClick={() => DeleteTask(task.id)}
                            className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 transition hover:border-red-200 hover:text-red-500"
                          >
                            Delete
                          </button>
                        </div>

                        <div className="flex items-center justify-between gap-3">
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                            {task.status}
                          </span>

                          {task.status !== "done" ? (
                            <button
                              onClick={() => MoveTask(task.id)}
                              className="rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-slate-800"
                            >
                              {getMoveLabel(task.status)}
                            </button>
                          ) : (
                            <span className="rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
                              Completed
                            </span>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex flex-1 items-center justify-center rounded-[1.6rem] border border-dashed border-slate-300/80 bg-white/60 px-5 py-10 text-center text-sm leading-6 text-slate-400">
                      No tasks here yet.
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tasks;
