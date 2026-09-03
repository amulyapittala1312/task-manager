import { useState } from "react";
import Navbar from "./Components/Navbar";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import { TaskProvider } from "./context/TaskContext";

function App() {
  const [editingTask, setEditingTask] = useState(null);

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  return (
    <TaskProvider>
      <Navbar />

      <main className="min-h-screen bg-gray-100">
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
      </main>
    </TaskProvider>
  );
}

export default App;