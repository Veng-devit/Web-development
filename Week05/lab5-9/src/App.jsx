import { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);
  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };
  return (
    <div className="container">
      <ul>
        {list.map((item) => (
          <li>
            {item.id}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
