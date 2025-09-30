import React, { useState } from "react";

function TaskInput({ addTask }) {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    addTask(task);
    setTask(""); // Clear input after adding
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        placeholder="Enter a task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TaskInput;
