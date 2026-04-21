import { useState } from "react";
import TaskInput from "./components/TaskInput";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <h1>Gerenciador de Tarefas</h1>

      <TaskInput onAddTask={addTask} />

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>✔ {task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
