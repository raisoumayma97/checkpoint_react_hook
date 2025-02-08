import React from "react";
import { useParams } from "react-router-dom";
import movieItem from "../movie";

const MovieDetails = () => {
  const { title } = useParams(); // Get title from URL
  const movie = movieItem.find((movie) => movie.title === title); // Find the movie by title

  if (!movie) {
    return <div>Movie not found</div>; // Handle the case where the movie isn't found
  }

  return (
    <div className="warning-bg p-4 rounded-lg">
      <h2 className="text-red font-bold">{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
      <img src={movie.posterURL} alt={movie.title} />
    </div>
  );
};

export default MovieDetails;
