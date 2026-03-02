import Pig from './assets/pig.webp'
import './App.css'
const SmartImage = ({ src }) => {
  // Task: If src is null/empty, show a gray placeholder div with "No Image".
  // If src exists, render the <img> with Tailwind 'object-cover'.
  return (
    <div className="w-full h-40 bg-gray-200">
      {!src ? <div className='bg-gray-500'>No image</div>:<div className='w-full h-full object-cover'><img src={src} alt="" /></div>}
    </div>
  );
};

function App() {
  return (
    <div>
      <SmartImage src={Pig}/>
    </div>
  );
}

export default App;
