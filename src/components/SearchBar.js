import { useEffect, useState } from "react";
import SearchResults from "./SearchResults";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [animeData, setAnimeData] = useState();

  const getData = async()=>{
    const res = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=${search}`)
    const resData = await res.json();
    setAnimeData(resData.data.slice(0, 8))
  }
  useEffect(()=> {
    getData()
  },[search])

  return (
    <div className="explore-search">
      <h3>Explore Anime</h3>
      <div className="explore-search-bar">
        <span className="search-icon">
          <svg width="25" height="25">
            <path d="M20.067 18.933l-4.157-4.157a6 6 0 10-.884.884l4.157 4.157a.624.624 0 10.884-.884zM6.5 11c0-2.62 2.13-4.75 4.75-4.75S16 8.38 16 11s-2.13 4.75-4.75 4.75S6.5 13.62 6.5 11z"></path>
          </svg>
        </span>
        <form>
          <input type="search" placeholder="What are you searching for?" onChange={(e) => setSearch(e.target.value)}/>
        </form>
      </div>
      <div className="explore-search-info">
        Or, browse with <a href="./">filters</a>
      </div>
      <div className="search-results">
      <SearchResults searchResults={animeData}/>
      </div>
    </div>
  );
};

export default SearchBar;
