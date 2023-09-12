// import React from 'react'
import "./Hero.css";
import Nav from "../Nav/Nav";
import IMDB from "../../assets/icons/imdb.png";
import Rottentomato from "../../assets/icons/rottenTomato.png";
import playIcon from "../../assets/icons/Play.svg";

function Hero() {
  return (
    <section className="hero-wrapper">
      <Nav />

      {/* Description Box */}
      <div className="description-box">
        {/* Movie Title */}
        <h1 className="movie-title">John Wick 3 : Parabellum</h1>

        {/* Movie Ratings */}
        <div className="flex movie-ratings">
          <div className="imdb-rating">
            <img src={IMDB} alt="imdb rating" />
            <p>86.0 / 100</p>
          </div>

          <div className="rt-rating">
            <img src={Rottentomato} alt="rotten tomato rating" />
            <p>97%</p>
          </div>
        </div>

        {/* About the Movie */}
        <p className="about-movie">
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>

      {/* Watch Trailer Button with Play Icon */}
      <button className="flex watch-trailer">
          <img src={playIcon} alt="Play Icon" className="play-icon" />
           <p>Watch Trailer</p>
        </button>
      </div>



      {/* Vertical Pagination */}
      <div className="vertical-pagination">
        <ul>
          <li>1</li>
          <li>2</li>
          <li className="active">3</li>
          <li>4</li>
          <li>5</li>

        </ul>
      </div>
    </section>
  );
}

export default Hero;
