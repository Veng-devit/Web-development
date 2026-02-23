
import { useState } from 'react';
import './App.css'

function App() {
  const [posts, setPosts]=useState([{id:1, text:"Hello", isEdited:false}, {id:2, text:"React", isEdited:false}]);
  const markAsEdited=(id)=>{
    setPosts(posts.map(post=>
      post.id === id ? { ...post, isEdited: !post.isEdited } : post
    ));
  }
  return (
    <div className='container'>
      <ul>
        {posts.map(post=>(
          <li>{post.id}. {post.text} <button onClick={()=>markAsEdited(post.id)}>{post.isEdited?"Done":"Edit"}</button></li>
        ))}
      </ul>
    </div>
  );
}

export default App
