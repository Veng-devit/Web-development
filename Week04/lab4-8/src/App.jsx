
import { useState } from 'react';
import './App.css'

const ColorPicker=({onColorChange})=>(
  <input type="color" onChange={(e)=> onColorChange(e.target.value)}/>
);
function App() {
  const [bg, setBg]=useState("#fffff");
  return(
    <div style={{background:bg , height:'100vh'}}>
      <ColorPicker onColorChange={setBg}/>
    </div>
  );
}

export default App
