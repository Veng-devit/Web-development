
import { useState } from 'react'
import './App.css'
function App() {
  const [text, setText]=useState("");
  const changeItem=(e)=>{
    setText(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={changeItem} />
      <p>You are typing: {text}</p>
    </div>
  );
}

export default App
