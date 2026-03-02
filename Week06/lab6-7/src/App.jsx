import { useState } from 'react'
import './App.css'
function App() {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  ); // This should come from Local Storage
  const [searchTerm, setSearchTerm] = useState("");
  // Task: Create a filteredList variable using list.filter()
  // before mapping it to the UI.
  const filterList=list.filter((item)=>
    item.text.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <h2>Task List</h2>

      <input
        type="text"
        placeholder="Search task..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {filterList.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App
