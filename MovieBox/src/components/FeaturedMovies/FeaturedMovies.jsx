import  { useEffect, useState } from "react";
import axios from "axios";
import chevron from "../../assets/icons/chevron-right.svg";
import MovieCards from "./Moviecards";
import { Link } from "react-router-dom"; 
import ErrorComponent from "../ErrorComponent";
import ErrorImg from '../../assets/images/404.png'









function FeaturedMovies() {
  const [topMovies, setTopMovies] = useState([]);
  // const [genres, setGenres] = useState([]);

  //end point for top movies
  const API_KEY = "2adb7205ccfa3487102880906c6d6cc1";
  const BASE_URL = "https://api.themoviedb.org/3";
const [error, setError] = useState(null)


  const getMovies = () => {
    const apiUrl = `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1`;

    axios
      .get(apiUrl)
      .then((response) => {
        const topMoviesData = response.data.results.slice(0, 10); // Slice to get the top 10 movies
        setTopMovies(topMoviesData);
      })
      .catch((error) => {
        setError("Error fetching movie details. Please try again later.")
        console.error("Error fetching movie details:", error);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);


  if (error) {
    return (
      <ErrorComponent
        message={error}
        image={ErrorImg}  
      />
    );
  }

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
            <Link key={movie.id} to={`/dashboard/${movie.id}`}> 
            <MovieCards key={movie.id} movie={movie} />
            </Link>
          ))}{" "}
        </div>
      </div>
    </section>
  );
}

export default FeaturedMovies;
