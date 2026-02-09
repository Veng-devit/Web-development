
import { useState } from 'react'
import './App.css'

const StatusBadge=({active, onToggle})=> (
  <button onClick={onToggle}>{active ? "Done":"Pending"}</button>
);
function App() {
  const [isDone, setISDone]= useState(false);
  return <StatusBadge active={isDone} onToggle={()=> setISDone(!isDone)}/>;
}

export default App
