import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div id="container">
      <Nav />
      <div class="content-container">
        <SearchBar />
      </div>
    </div>
  );
};

export default App;
