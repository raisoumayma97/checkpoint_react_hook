import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      {/* Movie Poster */}
      <Link to={`/${movie.title}`}>
        <img src={movie.posterURL} alt={movie.title} />
      </Link>
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
