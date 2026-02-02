
import './App.css'

function App() {
  const tasks = ["Learn JSX", "Create Componenets", "Master State"];
  return (
    <div>
      <h1>My tasks List</h1>
      <ul>
        <li>{tasks[0]}</li>
        <li>{tasks[1]}</li>
        <li>{tasks[2]}</li>
      </ul>
    </div>
  );
}

export default App
