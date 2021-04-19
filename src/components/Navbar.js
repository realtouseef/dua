const Navbar = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <a href="/">Duaa.</a>
          </div>
          <nav>
            <ul className="menu__links">
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
