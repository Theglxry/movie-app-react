import "./Moviecards.css";
import "../Hero/Hero.css";
import PropTypes from "prop-types";

import IMDB from "../../assets/icons/imdb.png";
import Rottentomato from "../../assets/icons/rottenTomato.png";
import loveIcon from "../../assets/icons/Heart.svg";

// const API_KEY ="2adb7205ccfa3487102880906c6d6cc1";
// const BASE_URL = 'https://api.themoviedb.org/3';

const imageBase = `https://image.tmdb.org/t/p/original`;

const Moviecards = ({ movie }) => {
  const poster = `${imageBase}${movie?.poster_path}`;
  const title = movie?.title;
  const release_date = movie?.release_date;
  // const vote_count = movie?.vote_count;
  const vote_average = movie?.vote_average;

  return (
    //   Movie cards
    <div className="movie-card" data-testid="movie-card">

      <div className="img-w">
        <img src={poster} alt={title} data-testid = "movie-poster"/>
        <div className="tl-wrapper">
          <div className="top-liked">Top Liked</div>

          <div className="love-icon">
            <img src={loveIcon} />
          </div>
        </div>
      </div>

      <div className="details">
        <div className="release-date">
          <p data-testid = "movie-release-date"> {release_date} </p>
        </div>
        <div className="title">
          <p data-testid = "movie-title"> {title} </p>
        </div>



        

        <div className="flex movie-ratings">
          <div className="imdb-rating">
            <img src={IMDB} alt="imdb rating" />
            <p>{vote_average * 10}/ 100</p>
          </div>

          <div className="rt-rating">
            <img src={Rottentomato} alt="rotten tomato rating" />
            <p>97%</p>
          </div>
        </div>

        {/* <p>{genres.join(", ")}</p> */}
      </div>
    </div>
  );
};

Moviecards.propTypes = {
  movie: PropTypes.object.isRequired,
};
export default Moviecards;
