import "./Dashboard.css";
import "../../components/Moviedetails/Moviedetails";
import logo from "../../assets/icons/Logo.svg";
import Moviedetails from "../../components/Moviedetails/Moviedetails";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ErrorComponent from "../../components/ErrorComponent";
import ErrorImg from "../../assets/images/404.png";
import Home from "../../assets/icons/Home.png";
import Projector from "../../assets/icons/Projector.png";
import TVshow from "../../assets/icons/TVshow.png";
import Calendar from "../../assets/icons/Calendar.png";
import Logout from "../../assets/icons/Logout.png";







function Dashboard() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
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
        setError("Error fetching movie details. Please try again later.");
        console.error("Error fetching movie details:", error);
      });
  }, [id]);

  if (error) {
    return <ErrorComponent message={error} image={ErrorImg} />;
  }

  return (
    <section className="dashboard-container">
      <div className="content-wrapper">
        <div className="side-menu">
          <div className="logo">
            <img className="desktopLogo" src={logo} alt="logo image" />
            <span className="logo-text">MovieBox</span>
          </div>

          <div className="menu-list">
            <div className="navItem">
              <img src={Home} />
              <span>Home</span>
            </div>

            <div className="active navItem">
              <img src={Projector} />
              <span>Movies</span>
            </div>

            <div className="navItem">
              <img src={TVshow} />
              <span>TV Series</span>
            </div>

            <div className="navItem">
              <img src={Calendar} />
              <span>Upcoming</span>
            </div>
          </div>

          <div className="flexCol ml">
            <div className="movie-quizes">
            <div>

              <h2>Play movie quizes and earn free tickets</h2>
              <p>50k people are playing now</p>
              </div>

              <button>Start playing</button>
            </div>

            <div className="navItem">
              <img src={Logout} />
              <span> Log out</span>
            </div>
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
