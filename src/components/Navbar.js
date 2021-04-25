import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./About";
import Hero from "./Hero";
import Blog from "./Blog";
import Contact from "./Contact";

const Navbar = () => {
  return (
    <>
      <Router>
        <header>
          <div className="container">
            <div className="logo">
              <Link to="/">Duaa.</Link>
            </div>
            <nav>
              <ul className="menu__links">
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </header>
        <Route path="/" exact component={Home} />
      </Router>
    </>
  );
};
const Home = () => {
  return <Hero />;
};

export default Navbar;
