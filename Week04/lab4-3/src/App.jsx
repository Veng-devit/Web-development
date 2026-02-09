
import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle]=useState("");
  const [desc, setDesc]=useState("");
  return(
    <form>
      <input placeholder='Title' value={title} onChange={(e)=> setTitle(e.target.value)}/>
      <input placeholder='Description' value={desc} onChange={(e)=> setDesc(e.target.value)}/>
      <p>Preview: {title} - {desc}</p>
    </form>
  );
}

export default App
