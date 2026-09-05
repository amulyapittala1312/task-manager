import { useState, useEffect, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm({ editingTask, setEditingTask }) {
  const { dispatch } = useContext(TaskContext);

  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Medium",
    dueDate: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTask({
        title: editingTask.title,
        description: editingTask.description,
        priority: editingTask.priority,
        dueDate:editingTask.dueDate || "",
      });
    }
  }, [editingTask]);

  const handleChange = (e) => {
  setTask({
    ...task,
    [e.target.name]: e.target.value,
  });

  if (e.target.name === "title") {
    setError("");
  }
};

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.title.trim()) {
  setError("Task name is required.");
  return;
}

setError("");

    if (editingTask) {
      dispatch({
  type: "UPDATE_TASK",
  payload: {
    ...task,
    id: editingTask.id,
    status: editingTask.status,
  },
});
      setEditingTask(null);
    } else {
      // Add new task
      dispatch({
        type: "ADD_TASK",
        payload: {
          ...task,
          id: Date.now(),
        },
      });
    }

    setTask({
      title: "",
      description: "",
      priority: "Medium",
      dueDate:"",
      
    });
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 px-6">
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {editingTask ? "Edit Task" : "Create a Task"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Task Name
            </label>

            <input
              type="text"
              name="title"
              value={task.title}
              onChange={handleChange}
              placeholder="Enter task name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {error && (
  <p className="text-sm text-red-600 mt-2">
    {error}
  </p>
)}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>

            <textarea
              name="description"
              value={task.description}
              onChange={handleChange}
              placeholder="Enter task description"
              rows="3"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Priority
            </label>

            <select
              name="priority"
              value={task.priority}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Due Date
  </label>

  <input
    type="date"
    name="dueDate"
    value={task.dueDate}
    onChange={handleChange}
    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {editingTask ? "Update Task" : "Add Task"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;