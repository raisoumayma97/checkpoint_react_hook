import React, { useEffect, useState } from 'react'
import MovieList from './components/MovieList'
import Filter from './components/Filter'
import movieItem from './movie'


function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(movieItem);

  const filterMovies = (criteria) => {
    setFilteredMovies(movies.filter((movie) => movie.genre === criteria));
  };

  useEffect(() => {
    setMovies(movieItem);
  }, []);

  return (
    <div className="p-4 m-2 border rounded">
      <Filter filterMovies={filterMovies} movies={movies} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
