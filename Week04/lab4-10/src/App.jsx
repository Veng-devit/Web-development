
import { useState } from 'react'
import './App.css'

function App() {
  const [search, SetSearch]=useState("");
  const items= ["Apple", "Banana", "Cherry"];
  const filteredItems=items.filter(item=>item.includes(search));
  return(
    <div>
      <input onChange={(e)=> SetSearch(e.target.value)} />
       <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App
