import React, { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import TaskCounter from "./TaskCounter";

function App() {
  const [tasks, setTasks] = useState([]);

  // Add a new task
  const addTask = (taskText) => {
    if (taskText.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
  };

  // Toggle task completed state
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>To-Do List</h2>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} />
      <TaskCounter tasks={tasks} />
    </div>
  );
}

export default App;
