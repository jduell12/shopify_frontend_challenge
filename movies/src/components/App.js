//styles
import "../styles/App.scss";

//context
import { MovieContext } from "../context/MovieContext";

//components
import { SearchBar } from "./index";

function App() {
  return (
    <MovieContext.Provider>
      <div className="App">
        <h1>The Shoppies</h1>
        <SearchBar />
      </div>
    </MovieContext.Provider>
  );
}

export default App;
