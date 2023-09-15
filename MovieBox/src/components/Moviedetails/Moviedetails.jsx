import "./Moviedetails.css";
import PropTypes from "prop-types";
import collage from "../../assets/images/movie-grid.png";
import ticketImg from "../../assets/icons/tickets.png";
import list from "../../assets/icons/List.png";
import play from "../../assets/icons/Play.svg";
import star from "../../assets/icons/Star.png";

const imageBase = `https://image.tmdb.org/t/p/original`;

const Moviedetails = ({ movie, genres }) => {
  if (!movie) {
    return <div>Loading...</div>;
  }
  console.log("Movie Object:", movie);
  const poster = `${imageBase}${movie?.poster_path}`;
  const title = movie?.title;
  const release_date = movie?.release_date;
  const runtime = movie?.runtime;
  const runtimeDisplay = runtime ? `${runtime} min` : "N/A";
  const overview = movie?.overview;

  const genreNames = movie.genres
    ? movie.genres.map((genre) => {
        const genreData = genres.find((g) => g.id === genre.id);
        return genreData ? genreData.name : "Unknown";
      })
    : [];

  const posterStyle = {
    maxWidth: "100%",
    height: "auto",
  };

  const formatDateToUTC = (dateString) => {
    const date = new Date(dateString);

    const options = {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    };
    return date.toLocaleString("en-US", options);
  };

  const releaseDateUTC = formatDateToUTC(release_date);

  return (
    <>
      <div className="movie-display">
        <img className="poster" src={poster} alt={title} style={posterStyle} />
        <div className="trailer">
          <img className="play" src={play} /> <p> Watch Trailer </p>{" "}
        </div>
      </div>

      <div className="grid-container">
        {/* left container */}
        <div className="grid-left">
          <div className=" grid-item">
            <div className="trpr">
              <div className="flex">
                <p data-testid="movie-title">{title} • </p>

                <p data-testid="movie-release-date">{releaseDateUTC}•</p>

                {/* <p> PG:13</p> */}

                <p data-testid="movie-runtime"> {runtimeDisplay} </p>
              </div>

              <div className="flex genre">
                {genreNames.map((genreName, index) => (
                  <button key={index} className="btn">
                    {genreName}
                  </button>
                ))}
              </div>
            </div>

            <div className="overview">
              <p data-testid="movie-overview">{overview}</p>
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
                <span>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor{" "}
                </span>{" "}
              </li>
            </ul>
          </div>

          <div className="grid-item">
            <div className="flex t-a">
              <div className="toprated"> Top rated movie #65</div>
              <div className="awards">Awards 9 nominations</div>
            </div>
          </div>
        </div>

        {/* right container */}
        <div className="flex-container">
          <div className="flex-item">
            <div className="star">
              <img src={star} alt="star " />
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
  movie: PropTypes.object,
  genres: PropTypes.array,
};
export default Moviedetails;
