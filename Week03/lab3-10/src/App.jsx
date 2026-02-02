import { useState } from 'react'
import './App.css'

function App() {
  const [isUrgent, setUrgent]=useState(false);
  return(
    <div style={{color: isUrgent ? "red" : "black"}}>
      <h2>Task Status</h2>
      <button onClick={()=> setUrgent(!isUrgent)}>Toggle urgent</button>
    </div>
  );
}

export default App
