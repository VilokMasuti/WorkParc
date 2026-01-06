import { useState } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [taskname, setTaskname] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);

  const handleTask = (e) => {
    e.preventDefault();
    if (taskname.trim() === "") return;

    if (editTaskId) {
      // update existing task
      const updatedTasks = tasks.map((task) =>
        task.id === editTaskId ? { ...task, name: taskname } : task
      );
      setTasks(updatedTasks);
      setEditTaskId(null);
    } else {
      // add new task
      const newTask = {
        id: Date.now(),
        name: taskname,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    }
    setTaskname("");
  };

  const handleEdit = (id) => {
    const taskEdit = tasks.find((t) => t.id === id);
    setEditTaskId(id);
    setTaskname(taskEdit.name);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;

  return (
    <section className="h-screen mx-auto flex flex-col items-center justify-center text-white antialiased font-sans">
      <h1 className="text-3xl font-bold underline">Todo App</h1>

      {/* Form */}
      <form onSubmit={handleTask} className="flex gap-4 mt-10">
        <input
          type="text"
          placeholder="Add a new task"
          className="p-2 rounded-md w-[25rem] border-2 border-amber-50 text-black"
          value={taskname}
          onChange={(e) => setTaskname(e.target.value)}
        />
        <button
          type="submit"
          className="bg-amber-500 rounded-md hover:bg-amber-600 transition-colors px-6 py-2 cursor-pointer"
        >
          {editTaskId ? "Update Task" : "Add Task"}
        </button>
      </form>

      {/* Task List */}
      <div className="mt-10 w-[30rem]">
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center bg-gray-800 p-2 rounded"
            >
              <span
                onClick={() => handleToggleComplete(task.id)}
                className={`cursor-pointer ${task.completed ? "line-through text-gray-400" : ""
                  }`}
              >
                {task.name}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(task.id)}
                  className="text-blue-400 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="text-red-400 hover:underline"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Stats */}
        <p className="mt-4 text-sm text-gray-300">
          Completed: {completedTasks} / {totalTasks}
        </p>
      </div>
    </section>
  );
};

export default Todo;
