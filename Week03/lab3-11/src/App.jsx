import React, { useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState(["Task 1"]);
  const [input, setInput] = useState("");

  const addTask = () => {
    setList([...list, input]);
    setInput("");
  };

  const deleteTask = (index) => {
    setList(list.filter((_, i) => i !== index));
  };
  return (
    <div className="App">
      <div className="container">
        <h1>To-Do List</h1>
        <div className="input-box">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a task"
          />
          <button onClick={addTask}>Add</button>
        </div>
        <ul>
          {
          list.map((task, index) => (
            <li key={index}>
              <span>{task}</span>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;