
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDetail = ({movies}) => {
    const { title } = useParams();
    const movie = movies.find((el) => el.title === title);

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe 
        width="560" 
        height="315" 
        src={movie.trailerLink} 
        title={movie.title} 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
         allowFullScreen>
      </iframe>
      <br />
      <Link to="/movies">
        <button>Back to Movies</button>
      </Link>
      
    </div>
  )
}

export default MovieDetail
