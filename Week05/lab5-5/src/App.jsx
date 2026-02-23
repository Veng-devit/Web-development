
import './App.css'

const DeleteBtn=({id, onConfirm})=>{
  return <button onClick={()=> onConfirm(id)}>Delete</button>
}
function App() {
  const handleConfirm=(id)=>{
    alert("Delete user ID: " + id);
    // return(
    //   <div>Delete user ID: {id}</div>
    // );
  }
  return (
    <div className='container'>
      <DeleteBtn id={10} onConfirm={handleConfirm}/>
    </div>
  );
}

export default App
