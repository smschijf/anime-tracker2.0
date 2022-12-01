import { useEffect, useState } from "react";

const ExploreRow = () => {
  const [upcomingAnime, SetUpcomingAnime] = useState([]);
  const [airingAnime, SetAiringAnime] = useState([]);
  const [popularAnime, SetPopularAnime] = useState([]);

  const GetUpcomingAnime = async () => {
    const temp = await fetch(`../data/anime_upcoming.json`).then((res) => {
      let data = res.json();
      return data;
    });

    SetUpcomingAnime(temp.data.slice(0, 5));
  };

  const GetAiringAnime = async () => {
    const temp = await fetch(`../data/anime_upcoming.json`).then((res) => {
      let data = res.json();
      return data;
    });

    SetAiringAnime(temp.data.slice(0, 5));
  };

  const GetPopularAnime = async () => {
    const temp = await fetch(`../data/anime_upcoming.json`).then((res) => {
      let data = res.json();
      return data;
    });

    SetPopularAnime(temp.data.slice(0, 5));
  };

  useEffect(() => {
    GetUpcomingAnime();
    GetAiringAnime();
    GetPopularAnime();
  }, []);

  return (
    <>
      <div className="explore-row">
        <h6>Upcoming Anime</h6>
        <div className="explore-row-media">
          {upcomingAnime.map((anime) => (
            <div className="explore-row-item" key={anime.id}>
              <a href={anime.links.self} target="_blank" rel="noreferrer">
                <img
                  src={anime.attributes.posterImage.small}
                  alt={anime.attributes.canonicalTitle}
                ></img>
              </a>
            </div>
          ))}
        </div>
        <div className="explore-row-more">
          <a href="./">View more</a>
        </div>
      </div>

      <div className="explore-row">
        <h6>Top Airing Anime</h6>
        <div className="explore-row-media">
          {airingAnime.map((anime) => (
            <div className="explore-row-item" key={anime.id}>
              <a href={anime.links.self} target="_blank" rel="noreferrer">
                <img
                  src={anime.attributes.posterImage.small}
                  alt={anime.attributes.canonicalTitle}
                ></img>
              </a>
            </div>
          ))}
        </div>
        <div className="explore-row-more">
          <a href="./">View more</a>
        </div>
      </div>

      <div className="explore-row">
        <h6>Most Popular Anime</h6>
        <div className="explore-row-media">
          {popularAnime.map((anime) => (
            <div className="explore-row-item" key={anime.id}>
              <a href={anime.links.self} target="_blank" rel="noreferrer">
                <img
                  src={anime.attributes.posterImage.small}
                  alt={anime.attributes.canonicalTitle}
                ></img>
              </a>
            </div>
          ))}
        </div>
        <div className="explore-row-more">
          <a href="./">View more</a>
        </div>
      </div>
    </>
  );
};

export default ExploreRow;
