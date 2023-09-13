import  { useEffect, useState } from "react";
import axios from "axios";
import chevron from "../../assets/icons/chevron-right.svg";
import MovieCards from "./Moviecards";

function FeaturedMovies() {
  const [topMovies, setTopMovies] = useState([]);
  // const [genres, setGenres] = useState([]);

  // Define your API endpoint for fetching top movies
  const API_KEY = "2adb7205ccfa3487102880906c6d6cc1";
  const BASE_URL = "https://api.themoviedb.org/3";

  const getMovies = () => {
    const apiUrl = `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1`;

    // Make the API request when the component mounts
    axios
      .get(apiUrl)
      .then((response) => {
        // Assuming the API response contains an array of top movies
        const topMoviesData = response.data.results.slice(0, 10); // Slice to get the top 10 movies
        setTopMovies(topMoviesData);
      })
      .catch((error) => {
        console.error("Error fetching top movies:", error);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <section className="fm-container">
      <div className="fm-wrapper">
        {/* title */}
        <div className="title-wrapper">
          <h1>Featured Movie</h1>
          <div className="see-more">
            <p>see more</p>
            <img src={chevron} alt="chevron right arrow" />
          </div>
        </div>

        {/* movie list */}
        <div className="movie-container">
          {topMovies.map((movie) => (
            <MovieCards key={movie.id} movie={movie} />
          ))}{" "}
        </div>
      </div>
    </section>
  );
}

export default FeaturedMovies;
