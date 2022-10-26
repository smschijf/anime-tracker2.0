import NavSearchBar from "./NavSearchBar";

const Nav = () => {
  return (
    <nav>
      <a href="./" class="nav-home">
        <span class="nav-logo">覧</span>
        <h1>
          The<strong>Otaku</strong>Ichiran
        </h1>
      </a>
	  <div class="nav-dropdown">Browse</div>
	  <div class="nav-dropdown">Feedback</div>
	  <NavSearchBar />
	  <div class="nav-item">
		<a href="#">Sign Up</a>
	  </div>
	  <div class="nav-item">
		<a href="#">Sign In</a>
	  </div>
    </nav>
  );
}

export default Nav;
