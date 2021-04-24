const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="content-1">
            <h3>
              <a href="/">Duaa.</a>
            </h3>

            <p>
              Aiming to have <em>Duas</em> on your fingertips.
            </p>
            <div className="social">
              <ul className="social__links">
                <li>
                  <a href="https://www.facebook.com/twsxf">
                    <i class="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/wrongtouseef">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/wrongtouseef">
                    <i class="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/wrongtouseef">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="content-2">
            <h4>Quick Links</h4>
            <ul className="page__links">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="madeWithLove">
        Made with <i class="fas fa-heart"></i> by&nbsp;
        <a href="https://www.github.com/wrongtouseef">touseef</a>
      </div>
    </>
  );
};

export default Footer;
