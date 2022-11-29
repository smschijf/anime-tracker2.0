const SideBar = () => {
  return (
    <>
      <h5>Categories</h5>
      <ul className="categories-list">
        <li>
            <a href="explore/anime/category/comedy">Comedy</a>
        </li>
        <li>
            <a href="explore/anime/category/fantasy">Fantasy</a>
        </li>
        <li>
            <a href="explore/anime/category/romance">Romance</a>
        </li>
        <li>
            <a href="explore/anime/category/action">Action</a>
        </li>
        <li>
            <a href="explore/anime/category/drama">Drama</a>
        </li>
      </ul>
      <div className="categories-more"></div>
    </>
  );
};

export default SideBar;
