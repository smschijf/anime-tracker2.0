import { useEffect, useState } from "react";

const ExploreRow = () => {
  const [upcomingAnime, SetUpcomingAnime] = useState([]);

  const GetUpcomingAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/top/anime?filter=upcoming`).then((res) =>
      res.json()
    );

    SetUpcomingAnime(temp);
  };

  useEffect(() => {
    GetUpcomingAnime();
  }, []);

  console.log(upcomingAnime);

  return (
    <div className="explore-row">
      <h6>Trending This Week</h6>
      <div className="explore-row-media"></div>
      <div className="explore-row-more">
        <a href="./">View more</a>
      </div>
    </div>
  );
};

export default ExploreRow;
