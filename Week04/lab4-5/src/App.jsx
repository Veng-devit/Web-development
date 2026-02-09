
import { useState } from 'react';
import './App.css'
const TaskItem= ({name, onRemove})=>(
  <li>{name} <button onClick={onRemove}>Delete</button></li>
);
function App() {
  const [tasks, setTasks]=useState(["React", "JSX", "Props"]);
  const removeTask=(index)=>{
    const newTask=tasks.filter((_, i)=> i!=index);
    setTasks(newTask)
  }
  return(
    <ul>
      {tasks.map((t,i) => <TaskItem key={i} name={t} onRemove={()=>removeTask(i)}/>)}
    </ul>
  );
}

export default App
