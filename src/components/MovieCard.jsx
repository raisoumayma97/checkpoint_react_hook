import React from 'react';
 
const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      {/* Movie Poster */}
      <img src={movie.posterURL} alt={movie.title} />

      {/* Movie Info */}
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p>{movie.genre}</p>
        <p className="rating">⭐ {movie.rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;