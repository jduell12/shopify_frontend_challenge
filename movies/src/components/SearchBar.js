//styles
import "../styles/SearchBar.scss";

//images
import magnifying from "../imgs/magnifying_glass.png";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <form>
        <label htmlFor="movie">Movie Title</label>
        <div className="box">
          <img src={magnifying} alt="Search" className="glass" />
          <input type="text" id="movie" />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
