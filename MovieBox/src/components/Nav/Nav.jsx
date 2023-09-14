import logo from "../../assets/icons/Logo.svg";
import { useNavigate } from "react-router-dom";
import mobileLogo from '../../assets/icons/tv.png';
import hamburgerIcon from "../../assets/icons/Menu-alt4.svg";
import Search from "../Searchbar/search";
import "./Nav.css";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";

const Nav = () => {

  const [topMovies, setTopMovies] = useState([]);
  const [value, setValue] = useState('')

  const navigate = useNavigate();


  // Define your API endpoint for fetching top movies
  const API_KEY = "2adb7205ccfa3487102880906c6d6cc1";
  const BASE_URL = "https://api.themoviedb.org/3";


  const getMovies = () => {


    const apiUrl = `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1`;
    // Make the API request when the component mounts
    axios.get(apiUrl).then((response) => { // Assuming the API response contains an array of top movies
      const topMoviesData = response.data.results; // Slice to get the top 10 movies
      setTopMovies(topMoviesData);
    }).catch((error) => {
      console.error("Error fetching top movies:", error);
    });
  }

  const results = useCallback(() => {

   if(value.trim()){
     const data = topMovies.filter((item) => item?.title?.toLowerCase()?.includes(value.toLowerCase()) || item?.overview?.toLowerCase().includes(value.toLowerCase()) || item.original_title?.toLowerCase()?.includes(value.toLowerCase()))
      return data
   }else {
    return []
   }

  
  }, [value]);


 const filterResults = results()



  useEffect(() => {
    getMovies()
  }, [])

  const handleSignInClick = () => {
    navigate("/dashboard");
  };


  return (
    <header className="header-wrapper">
      <nav className="flex nav-wrapper">
        <div className="logo">
          <img className="desktopLogo" src={logo}
            alt="Logo" />

            <img className="mobileLogo" src={mobileLogo} />
        </div>

        <div className="search-bar-container">
          <Search value={value}
            onChange={
              (e) => {
                setValue(e.target.value);
              }
            } />
            {
              value.trim().length > 0 ? (
                <ul className="movie_dropdown">
          {
            filterResults.map((item)=>{
              return (
                <li key={item}>
                    {item.title}
            </li>
              )
            })
          }
          
          </ul>
              ): null
            }
        </div>

        <div className="flex menu">
          <div className="sign-in">
            <button onClick={handleSignInClick}>Sign in</button>
          </div>

          <div className="hamburger-menu">
            <img src={hamburgerIcon} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
