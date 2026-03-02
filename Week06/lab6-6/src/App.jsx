import './App.css'
import { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {

     // Task: Call onAdd with an object { id: Date.now(), text: inputValue }
    const newTask = { id: Date.now(), text: inputValue };
    onAdd(newTask);

     // Task: Clear the input after adding 
    setInputValue("");

    // Task: Save the list to the localstorage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e)=> setInputValue(e.target.value)}
      />
      <button type='submit' onClick={handleSubmit}>submit</button>
    </div>
  );
};

function App() {

  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]); 
  };

  return (
    <div>
      <h2>Task App</h2>

      <TaskForm onAdd={handleAddTask} />

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>

    </div>
  );
}
export default App;