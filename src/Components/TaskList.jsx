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

      {/* Header */}
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

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">

        {/* Total Tasks */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 text-center hover:shadow-lg transition">
          <p className="text-gray-500 text-sm">
            Total Tasks
          </p>

          <p className="text-3xl font-bold text-gray-800 mt-2">
            {totalTasks}
          </p>
        </div>

        {/* Pending */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 text-center hover:shadow-lg transition">
          <p className="text-gray-500 text-sm">
            Pending
          </p>

          <p className="text-3xl font-bold text-yellow-500 mt-2">
            {pendingTasks}
          </p>
        </div>

        {/* Completed */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 text-center hover:shadow-lg transition">
          <p className="text-gray-500 text-sm">
            Completed
          </p>

          <p className="text-3xl font-bold text-green-600 mt-2">
            {completedTasks}
          </p>
        </div>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="🔍 Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition mb-4"
      />

      {/* Filters & Sort */}
      <div className="flex flex-wrap gap-3 mb-5">

        {/* All */}
        <button
          onClick={() => setFilter("All")}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            filter === "All"
              ? "bg-blue-600 text-white shadow-sm"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          All
        </button>

        {/* Pending */}
        <button
          onClick={() => setFilter("Pending")}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            filter === "Pending"
              ? "bg-yellow-500 text-white shadow-sm"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Pending
        </button>

        {/* Completed */}
        <button
          onClick={() => setFilter("Completed")}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            filter === "Completed"
              ? "bg-green-600 text-white shadow-sm"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Completed
        </button>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          <option value="priority">
            Sort by Priority
          </option>

          <option value="newest">
            Newest
          </option>

          <option value="oldest">
            Oldest
          </option>
        </select>
      </div>

      {/* Tasks */}
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