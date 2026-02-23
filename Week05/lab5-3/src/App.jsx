
import './App.css'
import reactLogo from './assets/react.svg'
const PostImage = ({url}) => {
   return(
    <div className='img-wrapper'>
      {url?<img src={url} alt="" /> : <div style={{color:'gray'}}>No image</div>}
    </div>
   );
}
function App() {
  return <PostImage url={reactLogo}/>;
}

export default App
