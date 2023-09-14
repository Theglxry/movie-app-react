// MovieList.js
// import React from 'react';
import { Link } from "react-router-dom";
import MovieDetails from "./Moviedetails";

function MovieList({ movies }) {
  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            <MovieDetails movie={movie} />{" "}
            {/* Display MovieDetails for each movie */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
