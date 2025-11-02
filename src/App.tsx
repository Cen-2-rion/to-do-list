import { useState } from 'react'
import type { Task } from './components/interfaces'
import './App.css'

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() === '') return;
    setTasks([...tasks, { text: input, completed: false }]);
    setInput('');
  }

  const toggleTask = (index: number) => {
    setTasks(prev => 
      prev.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  }

  const deleteTask = (index: number) => {
    setTasks(prev => prev.filter((_, i) => i !== index));
  }

  return (
    <div className='app'>
      <h1>To-Do List</h1>
      <Input onAdd={addTask} />
      <List tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  )
}

export default App
