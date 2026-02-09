import { useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState(["Task 1"]); 
  const [input, setInput] = useState("");

  const handleAdd = () => {
    setList([...list, input]); 
    setInput("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter task name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add Item</button>
      <ul>
        {list.map((task, index) => (
          <li key={index}>{task}</li> 
        ))}
      </ul>
    </div>
  );
}
export default App;
