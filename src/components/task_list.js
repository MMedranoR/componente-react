import React, { useState } from 'react';
import TaskListApp from './task_list_App';

export default function TaskList() {
  const [title, setTitle] = useState('');

  const [tasks, setTasks] = useState([]);

  function handleChange(event) {
    setTitle(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newTask = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTitle('');
  }

  function handleUpdate(id, newValue) {
    const updatedTasks = [...tasks];
    const index = updatedTasks.findIndex((item) => item.id === id);
    updatedTasks[index].title = newValue;
    setTasks(updatedTasks);
  }

  function handleDelete(id) {
    const deleteTasks = [...tasks];
    const index = deleteTasks.findIndex((item) => item.id === id);
    deleteTasks.splice(index, 1);
    setTasks(deleteTasks);
  }

  return (
    <div className="listContainer">
      <form className="listCreateForm" onSubmit={handleSubmit}>
        {/* input para agregar las tareas a la lista de notas */}
        <input
          onChange={handleChange}
          className="listInput"
          placeholder="Agregar tarea"
          value={title}
        />
        <input
          onClick={handleSubmit}
          className="listSubmit"
          type="submit"
          value="Crear nota"
        />
      </form>
      {/* lista de notas */}
      <div className="list">
        {tasks.map((item) => (
          <TaskListApp
            key={item.id}
            item={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
