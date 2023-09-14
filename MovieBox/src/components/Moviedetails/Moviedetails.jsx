import "./Moviedetails.css";
import PropTypes from "prop-types";
import collage from "../../assets/images/movie-grid.png";
import ticketImg from "../../assets/icons/tickets.png";
// import image from "../../assets/images/boatman.png"
import list from "../../assets/icons/List.png";
import play from "../../assets/icons/Play.svg";
import star from "../../assets/icons/Star.png";


const imageBase = `https://image.tmdb.org/t/p/original`;

const Moviedetails = ({ movie }) => {
  const poster = `${imageBase}${movie?.poster_path}`;

  const title = movie?.title;
  const release_date = movie?.release_date;
  const run_time = movie?.run_time;
  const overview = movie?.overview;
  const posterStyle = {
    maxWidth: "100%",
    height: "auto",
  };

 


  return (
    <>
      <div className="movie-display">
        <img src={poster} alt={title} style={posterStyle} />
        {/* <img src={image} alt={title}/> */}
        <div className="trailer">
          <img className="play" src={play} /> <p> Watch Trailer </p>{" "}
        </div>
      </div>

      <div className="grid-container">
        {/* left container */}
        <div className="grid-left">
          <div className="grid-item">
            <div className="trpr">
              <p data-testid ="movie-title">{title}</p>

              <p data-testid= "movie-release-date">{release_date} </p>

              <p> PG:13</p>

              <p data-testid= "movie-runtime">{run_time}</p>

              <button className="btn">Action</button>
              <button className="btn">Drama</button>
            </div>

            <div className="overview">
              <p data-testid ="movie-overview">{overview}</p>
            </div>
          </div>

          <div className="grid-item">
            <ul>
              <li>
                Director :<span> Lorem ipsum </span>
              </li>
              <li>
                Writers :<span> JLorem ipsum dolor sit amet </span>
              </li>

              <li>
                Stars :
                <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </span>{" "}
              </li>
            </ul>
          </div>

          <div className="grid-item">TOP RATED MOVIES</div>
        </div>

        

        {/* right container */}
        <div className="flex-container">
          <div className="flex-item">
            <div className="star">
              <img src={star} alt="star "/>
              <p> 8.5|350K</p>{" "}
            </div>
            <div className="showtime">
              <img src={ticketImg} /> See Showtimes
            </div>

            <div className="watch-more">
              <img src={list} /> Watch more options
            </div>
          </div>

          <div className="flex-item">
            <img className="collage" src={collage} width={posterStyle} />
          </div>
        </div>
      </div>
    </>
  );
};

Moviedetails.propTypes = {
  movie: PropTypes.object.isRequired,
};
export default Moviedetails;
