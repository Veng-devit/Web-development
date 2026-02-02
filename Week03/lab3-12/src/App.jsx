import React, { useState } from "react";
import "./App.css";

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
          {list.map((task, index) => (
            <TodoItem
              key={index}
              text={task}
              onRemove={() => deleteTask(index)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
function TodoItem({ text, onRemove }) {
  return (
    <li>
      <span>{text}</span>
      <button onClick={onRemove}>Delete</button>
    </li>
  );
}

export default App;
