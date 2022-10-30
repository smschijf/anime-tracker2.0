import NavSearchBar from "./NavSearchBar";

const Nav = () => {
  return (
    <nav>
      <a href="./" className="nav-home">
        <span className="nav-logo">覧</span>
        <h1>
          The<strong>Otaku</strong>Ichiran
        </h1>
      </a>
	  <div className="nav-dropdown">Browse</div>
	  <div className="nav-dropdown">Feedback</div>
	  <NavSearchBar />
	  <div className="nav-item">
		<a href="./">Sign Up</a>
	  </div>
	  <div className="nav-item">
		<a href="./">Sign In</a>
	  </div>
    </nav>
  );
}

export default Nav;
