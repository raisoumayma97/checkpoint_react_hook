import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";

import MovieDetails from "./pages/MovieDetails";
import movieItem from "./movie";

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
    <BrowserRouter>
      <div className="p-4 m-2 border rounded">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter filterMovies={filterMovies} movies={movies} />
                <MovieList movies={filteredMovies} />
              </>
            }
          />
          <Route path="/:title" element={<MovieDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
