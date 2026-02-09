
import './App.css'
const TaskItem=(props)=>{
  return(
    <div style={{border:'1px solid black', margin:'5px', padding:'5px'}}>
      <div>Name: {props.info.name}</div>
      <div>Priority: {props.info.priority}</div>
    </div>
  );
}
function App() {
    const taskData={id:101, name:"Buy Milk", priority:"High"};
    return <TaskItem info={taskData}/>;
}

export default App
