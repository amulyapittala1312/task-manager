import { useNavigate } from "react-router-dom";

function TaskCard({ task, onDelete, onEdit, onComplete }) {
  const navigate = useNavigate();

  const isOverdue =
    task.dueDate &&
    task.status !== "Completed" &&
    new Date(task.dueDate) < new Date();

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3
            onClick={() => navigate(`/tasks/${task.id}`)}
            className={`text-lg font-bold cursor-pointer ${
              task.status === "Completed"
                ? "text-gray-400 line-through"
                : "text-gray-800"
            }`}
          >
            {task.title}
          </h3>

          {task.dueDate && (
            <p className="text-sm text-gray-500 mt-2">
              🗓️ Due: {task.dueDate}
            </p>
          )}

          {isOverdue && (
            <p className="text-sm text-red-600 font-semibold mt-1">
              ⚠️ Overdue
            </p>
          )}
        </div>

        <div className="flex flex-col items-end gap-2">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              task.priority === "High"
                ? "bg-red-100 text-red-600"
                : task.priority === "Medium"
                ? "bg-yellow-100 text-yellow-600"
                : "bg-green-100 text-green-600"
            }`}
          >
            {task.priority}
          </span>

          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              task.status === "Completed"
                ? "bg-green-100 text-green-600"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {task.status}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mt-5 pt-4 border-t border-gray-100">
        {task.status !== "Completed" && (
          <button
            onClick={() => onComplete(task.id)}
            className="px-3 py-1.5 text-sm font-medium text-green-700 bg-green-50 rounded-lg hover:bg-green-100 transition"
          >
            Mark Complete
          </button>
        )}

        <button
          onClick={() => onEdit(task)}
          className="px-3 py-1.5 text-sm font-medium text-blue-700 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
        >
          Edit
        </button>

       <button
  onClick={() => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (confirmed) {
      onDelete(task.id);
    }
  }}
  className="px-4 py-2 text-sm font-medium text-red-700 bg-red-100 rounded-lg hover:bg-red-200 transition"
>
  Delete
</button>
      </div>
    </div>
  );
}

export default TaskCard;