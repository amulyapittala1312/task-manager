import { useNavigate } from "react-router-dom";
function TaskCard({ task, onDelete, onEdit, onComplete }) {
  const navigate = useNavigate();
  const isOverdue =
  task.dueDate &&
  task.status !== "Completed" &&
  new Date(task.dueDate) < new Date();
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-5">
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

      <div className="flex flex-wrap gap-4 mt-4">
        {task.status !== "Completed" && (
          <button
            onClick={() => onComplete(task.id)}
            className="text-sm text-green-600 hover:text-green-700 font-medium"
          >
            Mark Complete
          </button>
        )}

        <button
          onClick={() => onEdit(task)}
          className="text-sm text-blue-500 hover:text-blue-700 font-medium"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="text-sm text-red-500 hover:text-red-700 font-medium"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;