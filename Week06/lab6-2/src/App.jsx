import { useState } from 'react';
import './App.css'
const AlertBox = ({ type, message }) => {
  // Task: Create a variable that switches Tailwind classes
  // if type is "error" (red), "success" (green), or "warning" (yellow).
  return <div className={`p-4 rounded-lg ${type==='error'?'text-red-500': type==='success'? 'text-green-500':'text-amber-500'}`}>{message}</div>;
};

function App() {
  const [msg] = useState([{ type: "error", message: "code is error" }, {type:"success", message:"code run success"},{type:'warning', message:'code have some problem'}]);
  return (
    <div>
      {msg.map((role)=>(
        <AlertBox type={role.type} message={role.message}/>
      ))};
    </div>
  );
}

export default App
