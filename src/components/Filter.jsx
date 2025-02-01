import React from 'react';
import { useState } from 'react';

const Filter = ({ filterMovies, movies }) => {
  const handleChange = (event) => {
    filterMovies(event.target.value);
  };

  const genres = movies.map((movie) => movie.genre);
  return (
    <form>
      <select onChange={handleChange} className="form-select">
        <option value="">Select By Genre </option>
        {genres.map((genre, index) => (
          <option key={index}>{genre}</option>
        ))}
      </select>
    </form>
  );
};

export default Filter;
