import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";

function TaskList({ onEdit }) {
  const { tasks, dispatch } = useContext(TaskContext);
  const totalTasks = tasks.length;

const pendingTasks = tasks.filter(
  (task) => task.status === "Pending"
).length;

const completedTasks = tasks.filter(
  (task) => task.status === "Completed"
).length;

  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState(""); 
  const [sortBy, setSortBy] = useState("priority");

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  };

  const handleComplete = (id) => {
    dispatch({
      type: "UPDATE_TASK",
      payload: {
        ...tasks.find((task) => task.id === id),
        status: "Completed",
      },
    });
  };
  const handleClearAll = () => {
  const confirmed = window.confirm(
    "Are you sure you want to delete all tasks?"
  );

  if (!confirmed) return;

  dispatch({
    type: "CLEAR_TASKS",
  });
};

 const filteredTasks = tasks.filter((task) => {
  const matchesSearch = task.title
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesFilter =
    filter === "All" || task.status === filter;

  return matchesSearch && matchesFilter;
});
const sortedTasks = [...filteredTasks].sort((a, b) => {
  if (sortBy === "priority") {
    const priority = {
      High: 1,
      Medium: 2,
      Low: 3,
    };

    return priority[a.priority] - priority[b.priority];
  }

  if (sortBy === "newest") {
    return b.id - a.id;
  }

  if (sortBy === "oldest") {
    return a.id - b.id;
  }

  return 0;
});

  return (
    <div className="max-w-3xl mx-auto mt-10 px-6 pb-10">

      <div className="flex items-center justify-between mb-5">
  <h2 className="text-2xl font-bold text-gray-800">
    My Tasks
  </h2>

  {tasks.length > 0 && (
    <button
      onClick={handleClearAll}
      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
    >
      Clear All
    </button>
  )}
</div>
<input
  type="text"
  placeholder="Search tasks..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
      <div className="flex gap-3 mb-5">

        <button
  onClick={() => setFilter("All")}
  className={`px-4 py-2 rounded-lg ${
    filter === "All"
      ? "bg-blue-600 text-white"
      : "bg-gray-200 text-gray-700"
  }`}
>
  All
</button>
        <button
  onClick={() => setFilter("Pending")}
  className={`px-4 py-2 rounded-lg ${
    filter === "Pending"
      ? "bg-yellow-500 text-white"
      : "bg-gray-200 text-gray-700"
  }`}
>
  Pending
</button>

        <button
  onClick={() => setFilter("Completed")}
  className={`px-4 py-2 rounded-lg ${
    filter === "Completed"
      ? "bg-green-600 text-white"
      : "bg-gray-200 text-gray-700"
  }`}
>
  Completed
</button>
        <select
  value={sortBy}
  onChange={(e) => setSortBy(e.target.value)}
  className="border border-gray-300 rounded-lg px-4 py-2"
>
  <option value="priority">Sort by Priority</option>
  <option value="newest">Newest</option>
  <option value="oldest">Oldest</option>
</select>

      </div>

      {tasks.length === 0 ? (
  <p className="text-gray-500 text-center py-10">
    No tasks yet. Create your first task!
  </p>
) : sortedTasks.length === 0 ? (
  <p className="text-gray-500 text-center py-10">
    No tasks found.
  </p>
) : (
  <div className="space-y-4">
    {sortedTasks.map((task) => (
      <TaskCard
        key={task.id}
        task={task}
        onDelete={handleDelete}
        onEdit={onEdit}
        onComplete={handleComplete}
      />
    ))}
  </div>
)}

    </div>
  );
}

export default TaskList;