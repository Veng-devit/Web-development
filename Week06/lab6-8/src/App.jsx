import { useState } from 'react'
import './App.css'
const tasks = [
  { id: 1, text: "Study React", isCompleted: false },
  { id: 2, text: "Buy groceries", isCompleted: true },
];

const TaskItem = ({ data, onToggle }) => {
  return (
    <div className="flex items-center gap-2">
      <input type="checkbox" checked={data.isCompleted} onChange={() => onToggle(data.id)} />
      <span className={data.isCompleted ? "line-through text-gray-400" : ""}>{data.text}</span>
    </div>
  );
};

function App() {
  const handleToggle = (task) => {
    task.isCompleted = !task.isCompleted;
    setreRender(reRender + 1);
  };

  const [reRender, setreRender] = useState(0); 
  return (
    <div>
      <h2>Task List</h2>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          data={task}
          onToggle={() => handleToggle(task)}
        />
      ))}
    </div>
  );
}

export default App
