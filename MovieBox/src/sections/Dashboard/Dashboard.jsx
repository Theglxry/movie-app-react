import "./Dashboard.css";
import "../../components/Moviedetails/Moviedetails";
import logo from "../../assets/icons/Logo.svg";
import Moviedetails from "../../components/Moviedetails/Moviedetails";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Dashboard() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null); // Initialize as null

  // Fetch the selected movie's details using the id
  useEffect(() => {
    // Make an API request to get the movie details based on the id
    const API_KEY = "2adb7205ccfa3487102880906c6d6cc1";
    const BASE_URL = "https://api.themoviedb.org/3";
    const apiUrl = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;

    axios
      .get(apiUrl)
      .then((response) => {
        const movieDetailsData = response.data;

        setMovieDetails(movieDetailsData);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }, [id]);

  if (!movieDetails) {
    return <p>Loading...</p>;
  }

  return (
    <section className="dashboard-container">
      <div className="content-wrapper">
        <div className="side-menu">
          <div className="logo">
            <img src={logo} alt="logo image" />
            <span className="logo-text">MovieBox</span>
          </div>

          <div className="menu-list"></div>

          <div className="log-out">
            <div className="movie-quizes"></div>

            <div>Log out</div>
          </div>
        </div>

        <div className="main-content">
          <Moviedetails movie={movieDetails} />
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
