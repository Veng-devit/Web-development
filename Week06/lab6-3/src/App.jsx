import { useState } from 'react'

import './App.css'
  const DisplayItem=({items})=>{
    return(
      <div>
        {items.map((msg,index) =>(
          <div key={index}>{msg}</div>
        ))}
      </div>
    );
    
  }
function App() {
  const [items, setItems] = useState(["dbvjd"]); // Toggle between [] and ["Task"] to test

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold">Inbox</h1>
      {/* Task: If items.length is 0, show "No messages found". Else, map items. */}
      {items.length===0? "No messages found":<DisplayItem items={items}/>}
    </div>
  );
}


export default App
