 
import searchIcon from "../../assets/icons/search.svg";







const Search = ({onChange,value}) => {

  

  return (
    <div>
      <div className="flex search-bar">
        <input
          type="text"
          placeholder="What do you want to watch?"
          value={value}
          onChange={onChange}
        />
        <div className="search-icon" >
          <img src={searchIcon} alt="Search" />
        </div>
      </div>

      {/* Pass searchResults as a prop to FeaturedMovies */}
      {/* <FeaturedMovies searchResults={searchResults} /> */}
    </div>
  );
};

 
export default Search;

