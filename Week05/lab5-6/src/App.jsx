
import { useState} from 'react';
import './App.css'

function App() {
  const [posts, setPosts]=useState([]);
  const [newContent, setNewContent]=useState("");
  const handleAdd=()=>{
    const newPost={id:posts.length, text:newContent};
    setPosts([...posts, newPost]);
    setNewContent("");
  }
  return (
    <div className='container' style={{display:'flex', flexDirection:'column', gap:'20px'}}>
      <input type="text" placeholder='Enter new post content' value={newContent} onChange={(e)=>setNewContent(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {posts.map(post =>(
          <div>{post.id}. {post.text}</div>
        ))}
      </ul>
    </div>
  );
}

export default App
