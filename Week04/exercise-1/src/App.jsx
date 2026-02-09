
import './App.css'


function Header(){
  return <h1>WELCOME TO THIS COURSE!</h1>
}
function App() {
  return(
    <div className='app'>
      <Header/>
      <main className='content'>
        <p>   React (also known as React.js or ReactJS) is a free and open-source front-end
          JavaScript library for building user interfaces based on components. It is
          maintained by Meta (formerly Facebook) and a community of individual developers
          and companies. React can be used to develop single-page, mobile, or server-rendered applications
          with frameworks like Next.js. Because React is only concerned with the user
          interface and rendering components to the DOM, React applications often rely
          on libraries for routing and other client-side functionality.</p>
      </main>
      <footer className='footer'>
        You can find the React doc at <a href="https://react.dev">https://react.dev/</a>
      </footer>
    </div>
  );
}

export default App
