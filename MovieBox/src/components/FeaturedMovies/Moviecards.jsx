import "./Moviecards.css";
import "../Hero/Hero.css";
import PropTypes from "prop-types";

import IMDB from "../../assets/icons/imdb.png";
import Rottentomato from "../../assets/icons/rottenTomato.png";
import loveIcon from "../../assets/icons/Heart.svg"; 
// import poster from '../../assets/images/strangerthings.png'

// const API_KEY ="&api_key=2adb7205ccfa3487102880906c6d6cc1"; 
// const BASE_URL = 'https://api.themoviedb.org/3';





const Moviecards = ({ poster, title, release_date, imdb_rating, rotten_tomato_rating, genres}) => {



  return (
    //   Movie cards
    <div className="movie-card" data-testd="movie-card">
      <div className="img-w">
       <img src={poster} alt= {title}/>
         <div className="tl-wrapper">
           <div className="top-liked">
           Top Liked
           </div>


            <div className="love-icon">
           <img src={loveIcon}/>
           </div>
          </div>


      </div>



      <div className="details">
        <p> {release_date} </p>
        <p> {title} </p>

        <div className="flex movie-ratings">
          <div className="imdb-rating">
            <img src={IMDB} alt="imdb rating" />
            <p>{imdb_rating}/ 100</p>
          </div>

          <div className="rt-rating">
            <img src={Rottentomato} alt="rotten tomato rating" />
            <p>{rotten_tomato_rating}%</p>
          </div>
        </div>


              <p>{genres.join(", ")}</p>
      </div>


    </div>
  );
};




Moviecards.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  imdb_rating: PropTypes.number.isRequired,
  rotten_tomato_rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Moviecards;




