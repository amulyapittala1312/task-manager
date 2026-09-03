import { createContext, useReducer, useEffect} from "react";

export const TaskContext = createContext();

function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
  return [
    ...state,
    {
      ...action.payload,
      status: action.payload.status || "Pending",
    },
  ];
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);
      
      case "CLEAR_TASKS":
  return [];

    case "UPDATE_TASK":
        return state.map((task) =>
    task.id === action.payload.id
      ? action.payload
      : task
  );
  }
}

export function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  useEffect(() => {
  const savedTasks = localStorage.getItem("tasks");
  

  if (savedTasks) {
    const parsedTasks = JSON.parse(savedTasks);

    parsedTasks.forEach((task) => {
      dispatch({
        type: "ADD_TASK",
        payload: task,
      });
    });
  }
}, []);
useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}