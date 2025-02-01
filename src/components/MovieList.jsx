import React from 'react';
import MovieCard from './MovieCard';
const MovieList = ({ movies }) => {
  return (
    <div className="d-flex gap-5 flex-wrap just-content-center align-items-center mt-4">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;