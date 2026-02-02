import "./App.css";

function App() {
  const tasks = ["Learn JSX", "Create Componenets", "Master State"];
  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "green", margin: 0, padding: 0 }}>
      <div>
        <h1>My Task List</h1>
        <p>Here are my dialy tasks</p>
        <ul>
          <li>{tasks[0]}</li>
          <li>{tasks[1]}</li>
          <li>{tasks[2]}</li>
          <div>Total tasks: {tasks.length}</div>
        </ul>
      </div>
    </div>
  );
}

export default App;
