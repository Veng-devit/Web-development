import React, { useState } from 'react';

function App() {
  const [list, setList] = useState(["Task 1"]);
  const [input, setInput] = useState("");
  const addTask = () => {
    setList([...list, input]);
    setInput(""); 
  };
  return (
    <div>
      <h1>Adding to the Array</h1>
      
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)} 
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {list.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;