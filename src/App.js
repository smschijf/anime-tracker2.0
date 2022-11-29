import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import ExploreRow from "./components/ExploreRow";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <div id="container">
      <Nav />
      <div className="content-container">
        <div className="explore-content">
          <SearchBar />
          <ExploreRow />
        </div>
        <div className="explore-sidebar">
            <SideBar />
        </div>
      </div>
    </div>
  );
};

export default App;
