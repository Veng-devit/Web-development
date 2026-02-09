
import './App.css'

function ProfileIcon(props){
  return(
    <div>User: {props.name}</div>
  );
}
function Header(props){
  return <header><ProfileIcon name={props.name}/></header>
}
function App() {
  const user="Devit";
  return <div><Header name={user}/></div>
}

export default App
