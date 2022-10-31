import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import ExploreRow from "./components/ExploreRow";

const App = () => {
  return (
    <div id="container">
      <Nav />
      <div className="content-container">
        <div className="explore-content">
          <SearchBar />
          <ExploreRow />
        </div>
        <div className="explore-sidebar"></div>
      </div>
    </div>
  );
};

export default App;
