
import { useState } from 'react';
import './App.css'

function App() {
  const [search, setSearch]=useState("");
  const items=["React", "JavaScript", "Tailwind"];
  const filterItems=items.filter(item=>item.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  return(
    <div className='container'>
      <input type="text" placeholder='Enter search task' value={search} onChange={(e)=>setSearch(e.target.value)}/>
      <ul>
        {filterItems.map(item=>(
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App
