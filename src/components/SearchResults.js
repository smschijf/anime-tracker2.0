export const SearchResults = ({ searchResults }) => {
  return (
    <>
      {
        searchResults ? (
          searchResults.map((anime, index) => {
            return (
                <div className="search-row" key={index}>
                <img src={anime.attributes.posterImage.small} alt="anime thumbnail"></img>
                  <div className="anime-info">
                    <h4>{anime.attributes.titles.en_jp}</h4>
                  </div>
                </div>
            )
          })
        ) : "Not Found"
      }
    </>
  );
};

export default SearchResults;
