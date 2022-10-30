import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import ExploreRow from "./components/ExploreRow";

const App = () => {
  return (
    <div id="container">
      <Nav />
      <div className="content-container">
        <SearchBar />
        <ExploreRow />
      </div>
    </div>
  );
};

export default App;
