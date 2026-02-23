
import { useState } from 'react';
import './App.css'


const PostActions=({onLike, onShare})=>{
  return(
    <div style={{display:'flex', gap:'20px'}}>
      <button onClick={onLike}>Like</button>
      <button onClick={onShare}>Share</button>
    </div>
  );
}
function App() {
  const [like, setLike]=useState(0);
  const [share, setShare]=useState(0);
  const handleLike=()=>{
    setLike(like+1);
  }
  const handleShare=()=>{
    setShare(share+1);
  }
  return (
    <div className='container'>
      <div>Like: {like}</div>
      <div>Share: {share}</div>
      <PostActions onLike={handleLike} onShare={handleShare}/>
    </div>
  );
}

export default App
