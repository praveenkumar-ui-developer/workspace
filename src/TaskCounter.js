import React from "react";

function TaskCounter({ tasks }) {
  const pending = tasks.filter((task) => !task.completed).length;
  return <h4>Pending Tasks: {pending}</h4>;
}

export default TaskCounter;
