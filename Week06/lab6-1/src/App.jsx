import './App.css'
import { useState } from 'react';
// App -> Dashboard -> Sidebar -> UserProfile -> Avatar
const Avatar = ({ config }) => {
  /* Task: Display config.username and config.status here */
  return (
    <div className="p-2 border">
      <div>{config.username}</div>
      <div>{config.status}</div>
    </div>
  );
};

const UserProfile = ({ config }) => <Avatar config={config} />;
const Sidebar = ({ config }) => <UserProfile config={config} />;
const Dashboard = ({ config }) => <Sidebar config={config} />;

function App() {
  const [userConfig] = useState({ username: "DevMaster", status: "Online" });
  return <Dashboard config={userConfig} />;
}

export default App
