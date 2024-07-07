import React, { useState, useEffect } from 'react';
import './TaskItem.css';

const TaskItem = ({ task, onStatusChange, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => onDelete(task.id), 300); // Match the duration of the CSS animation
  };

  const [selectClass, setSelectClass] = useState('');

  useEffect(() => {
    setSelectClass(task.status === 'Done' ? 'status-done' : 'status-todo');
  }, [task.status]);

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setSelectClass(newStatus === 'Done' ? 'status-done' : 'status-todo');
    onStatusChange(task.id, newStatus);
  };

  return (
    <div className={`task-item-container ${task.status === 'Done' ? 'done' : ''} ${isDeleting ? 'deleting' : ''}`}>
      <span className="task-title">{task.title}</span>
      <select
        value={task.status}
        onChange={handleStatusChange}
        className={`task-status ${selectClass}`}
      >
        <option value="To Do">To Do</option>
        <option value="Done">Done</option>
      </select>
      <button onClick={handleDelete} className="delete-button">Delete</button>
    </div>
  );
};

export default TaskItem;
