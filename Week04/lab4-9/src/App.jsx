
import './App.css'


function TaskList({task}){
  return (
    <ul>
      {task.map((t,i)=>(<li key={i}>{t}</li>))}
    </ul>
  );
}
function EmptyMsg(){
  return <p>No task available. Please add a task</p>
}
function App() {
  const tasks=[];
  return(
    <div>
      {tasks.length===0 ? <EmptyMsg/>: <TaskList/>}
    </div>
  );
}

export default App
