import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./App.css";
const getLocalItems =()=>{
  let list = localStorage.getItem('tasks');
  if(list){
    return JSON.parse(localStorage.getItem("tasks"));
  }else{
    return [];
  }
}
const App = () => {
  const [tasks, setTasks] = useState(getLocalItems());


  // Save tasks to local storage whenever the tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const changeStatus = (id, status) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, status } : task))
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app-container">
      <div className="app-content">
        <div className="app-header">
          <h1>Task Manager</h1>
       
        </div>
        <TaskForm onAddTask={addTask} />
        <TaskList
          tasks={tasks}
          onStatusChange={changeStatus}
          onDelete={deleteTask}
        />
      </div>
    </div>
  );
};

export default App;
