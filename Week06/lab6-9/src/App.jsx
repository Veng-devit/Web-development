import { useState } from 'react'
import './App.css'


function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const deleteItem = (id) => {
    // Task: Use .filter() to remove the item.
    const filterItem=items.filter((item)=> item.id!=id);
    setItems(filterItem);
    // Task: Update localStorage with the new filtered array.
    localStorage.setItem("tasks", JSON.stringify(filterItem));
  };
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}{" "}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
