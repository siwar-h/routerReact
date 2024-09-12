import { Link } from 'react-router-dom';

function MoviesListe({ movies }) {
  return (
    <div>
      {movies.map((movie, index) => (
        <div key={index}>
          <Link to={`/movies/${movie.title}`}>
            <h2>{movie.title}</h2>
            <img src={movie.posterURL} alt={movie.title} />
          </Link>
          <p>{movie.description}</p>
          <p>Rating: {movie.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default MoviesListe;