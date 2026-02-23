import Movie from "./components/Movie.jsx";
import {MOVIE_LIST} from "./data.js";
function App() {
  return (
  <>
    <header>
      <h1>Top Movies 2024</h1>
      <p>Which movie you want to watch?</p>
    </header>
    <main>
      <section className="movie-categories">
        <ul className="movies">
          {MOVIE_LIST.map((val,index)=>(
            <Movie key={index} movie={val}/>
          ))}
        </ul>
      </section>
    </main>
  </>);
}

export default App;
