export default function Movie({ movie }) {
  return (
    <li className="movie-item">
      <button>
        <img src={movie.img.src} alt={movie.img.alt} />
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>
        <p>{movie.genre}</p>
        <p>{movie.description}</p>
      </button>
    </li>
  );
}