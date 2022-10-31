import { useEffect, useState } from "react";

const ExploreRow = () => {
  const [upcomingAnime, SetUpcomingAnime] = useState([]);

  const GetUpcomingAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/top/anime?filter=upcoming`).then((res) =>
      res.json()
    );

    SetUpcomingAnime(temp.data.slice(0, 5));
  };

  useEffect(() => {
    GetUpcomingAnime();
  }, []);

  console.log(upcomingAnime);

  return (
    <div className="explore-row">
      <h6>Upcoming Anime</h6>
      <div className="explore-row-media">
        {upcomingAnime.map(anime => (
            <div className="explore-row-item" key={anime.mal_id}>
                <a href={anime.url} target="_blank" rel="noreferrer">
                    <img src={anime.images.jpg.image_url} alt={anime.title}></img>
                </a>
            </div>
        ))}
      </div>
      <div className="explore-row-more">
        <a href="./">View more</a>
      </div>
    </div>
  );
};

export default ExploreRow;
