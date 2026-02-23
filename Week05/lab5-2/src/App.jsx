
import './App.css'

const Layout=({children})=>{
  return(
    <div className='app-container'>
      <nav>Navbar</nav>
      {children}
      <footer>Footer</footer>
    </div>
  );
}
function App() {
  return(
    <Layout>
      <h1>Title</h1>
      <p>Learn react JS course with coursera</p>
      <ul style={{textAlign:'center',display: 'inline-block'}}>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    </Layout>
  );
}

export default App
