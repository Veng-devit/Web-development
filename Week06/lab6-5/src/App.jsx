import { useState } from 'react';
import "./App.css"; 
const user_info={
  id:"100",
  name:"John",
  email:"john@gamil.com"
}
localStorage.setItem('todo_data', JSON.stringify([user_info]));
function App() {
  const [tasks, setTasks]=useState(()=>{
    const data=localStorage.getItem("todo_data");
    return data ? JSON.parse(data) : ["hgf", "hguygu"];
  });
  return(
    <div>
      <ul>
        {tasks.map(task=>(
           <li key={task.id}>{task.name} - {task.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
