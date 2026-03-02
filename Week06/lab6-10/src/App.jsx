import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]); 
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("my_storage_key")) || [];
    setData(storedData);
  }, []); 
  useEffect(() => {
    localStorage.setItem("my_storage_key", JSON.stringify(data));
  }, [data]); 
  const addItem = (text) => {
    const newItem = { id: Date.now(), text: text };
    setData([...data, newItem]);
  };
  const deleteItem = (id) => {
    const filtered = data.filter((d) => d.id !== id);
    setData(filtered);
  };
  return (
    <div>
      <h2>My List</h2>
      <button onClick={() => addItem("New Item")}>Add Item</button>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.text}{" "}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;