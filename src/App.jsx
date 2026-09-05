import { useState, useContext } from "react";
import Navbar from "./Components/Navbar";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import { TaskProvider,TaskContext } from "./context/TaskContext";
import {  BrowserRouter, Routes, Route,useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function TaskDetails({onEdit}) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, dispatch} = useContext(TaskContext);

  const task = tasks.find((task) => task.id === Number(id));

  if (!task) {
    return (
      <div className="text-center pt-12">
        <h2 className="text-3xl font-bold text-gray-800">
          Task Not Found
        </h2>
        <p className="text-gray-500 mt-2">
          The task you are looking for does not exist.
        </p>
        
      </div>
    );
  }
  const handleToggleStatus = () => {
  dispatch({
    type: "UPDATE_TASK",
    payload: {
      ...task,
      status: task.status === "Completed"
        ? "Pending"
        : "Completed",
    },
  });
};
  

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">

      <div className="bg-white rounded-2xl shadow-sm border p-8">

        <h2 className="text-3xl font-bold text-gray-800">
          {task.title}
        </h2>

        <p className="text-gray-500 mt-4 leading-7">
          {task.description}
        </p>

        <div className="flex gap-3 mt-6">

          <span
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              task.priority === "High"
                ? "bg-red-100 text-red-600"
                : task.priority === "Medium"
                ? "bg-yellow-100 text-yellow-600"
                : "bg-green-100 text-green-600"
            }`}
          >
            Priority: {task.priority}
          </span>

          <span
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              task.status === "Completed"
                ? "bg-green-100 text-green-600"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            Status: {task.status}
          </span>

        </div>

        <div className="mt-8 border-t pt-5">
          <p className="text-sm text-gray-400">
            Task ID: {task.id}
          </p>
        </div>
  <button
  onClick={handleToggleStatus}
  className={`mt-8 mr-3 px-5 py-2 text-white rounded-lg transition ${
    task.status === "Completed"
      ? "bg-yellow-500 hover:bg-yellow-600"
      : "bg-green-600 hover:bg-green-700"
  }`}
>
  {task.status === "Completed"
    ? "Mark as Pending"
    : "Mark Complete"}
</button>
<button
  onClick={() => {
    onEdit(task);
    navigate("/");
  }}
  className="mt-8 mr-3 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
>
  Edit Task
</button>
<button
  type = "button"
  onClick={() => navigate("/tasks")}
  className="mt-8 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
>
  ← Back to Tasks
</button>
      </div>

    </div>
  );
}
function App() {
  const [editingTask, setEditingTask] = useState(null);

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  return (
    <BrowserRouter>
      <TaskProvider>
        <Navbar />

        <main className="min-h-screen bg-gray-100">
          <Routes>

            <Route
              path="/"
              element={
                <>
                  <h2 className="text-center text-3xl font-bold pt-12">
                    Task Manager
                  </h2>

                  <p className="text-gray-500 mt-2 text-center">
                    Stay organized and get things done.
                  </p>

                  <TaskForm
                    editingTask={editingTask}
                    setEditingTask={setEditingTask}
                  />

                  <TaskList onEdit={handleEdit} />
                </>
              }
            />

            <Route
              path="/tasks"
              element={
                <>
                  <h2 className="text-center text-3xl font-bold pt-12">
                    Tasks
                  </h2>

                  <TaskList onEdit={handleEdit} />
                </>
              }
            />

            <Route
  path="/about"
  element={
    <div className="max-w-5xl mx-auto px-6 py-12">

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">
          About TaskFlow
        </h2>

        <p className="text-gray-500 mt-3 text-lg">
          A simple and efficient way to organize your tasks and stay productive.
        </p>
      </div>

      {/* About Card */}
      <div className="bg-white rounded-2xl shadow-sm border p-8 mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          What is TaskFlow?
        </h3>

        <p className="text-gray-600 leading-7">
          TaskFlow is a task management application that helps you create,
          organize, and track your daily tasks in one place. You can easily
          add new tasks, edit them, mark them as completed, and delete tasks
          when they are no longer needed.
        </p>
      </div>

      {/* Features */}
      <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">
        What You Can Do
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white rounded-2xl shadow-sm border p-6 text-center">
          <div className="text-3xl mb-3">📝</div>
          <h4 className="font-semibold text-lg text-gray-800">
            Create Tasks
          </h4>
          <p className="text-gray-500 mt-2">
            Add new tasks and keep track of your work.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border p-6 text-center">
          <div className="text-3xl mb-3">✏️</div>
          <h4 className="font-semibold text-lg text-gray-800">
            Edit Tasks
          </h4>
          <p className="text-gray-500 mt-2">
            Update your tasks whenever you need to.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border p-6 text-center">
          <div className="text-3xl mb-3">✅</div>
          <h4 className="font-semibold text-lg text-gray-800">
            Track Progress
          </h4>
          <p className="text-gray-500 mt-2">
            Mark completed tasks and stay organized.
          </p>
        </div>

      </div>

      {/* Built With */}
      <div className="bg-white rounded-2xl shadow-sm border p-8 mt-8 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          Built With
        </h3>

        <p className="text-gray-600">
          React • React Router • Tailwind CSS
        </p>
      </div>

    </div>
  }
/>
<Route
  path="/tasks/:id"
  element={<TaskDetails onEdit={handleEdit}/>}
/>

          </Routes>
        </main>
      </TaskProvider>
    </BrowserRouter>
  );
}

export default App;