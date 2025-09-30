import React from "react";

function TaskList({ tasks, toggleTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} style={{ listStyle: "none" }}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
