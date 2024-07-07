import React, { useState } from "react";
import { MdOutlineLibraryAdd } from "react-icons/md";
import "./TaskForm.css";

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("To Do");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask({ title, status });
    setTitle("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="task-input"
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="task-select"
      >
        <option value="To Do">To Do</option>
        <option value="Done">Done</option>
      </select>
      <button type="submit" className="task-button">
        <MdOutlineLibraryAdd />
      </button>
    </form>
  );
};

export default TaskForm;
