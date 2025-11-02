import { useEffect, useState } from 'react';
import type { Task } from './components/interfaces';
import Input from './components/Input';
import List from './components/List';
import './App.css';

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text: string): void => {
    if (text.trim() === '') return;
    setTasks([...tasks, { text, completed: false }]);
  }

  const toggleTask = (index: number): void => {
    setTasks(prev => 
      prev.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  }

  const deleteTask = (index: number): void => {
    setTasks(prev => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <Input onAdd={addTask} />
      <List tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  )
}

export default App
