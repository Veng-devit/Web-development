
import './App.css'
const TaskItem= () => <li>Individual Task</li>;
const TaskContainer= () =>{
  return (
    <fieldset>
      <legend>Mylist</legend>
      <TaskItem/>
      <TaskItem/>
      <TaskItem/>
    </fieldset>
  );
}
function App() {
  return <TaskContainer/>;
}

export default App
