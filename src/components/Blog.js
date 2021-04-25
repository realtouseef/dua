import Quran1 from "../assests/images/quran1.jpg";
import Quran2 from "../assests/images/quran2.jpg";

const Blog = () => {
  return (
    <>
      <div className="blog">
        <div className="container">
          {/* <div className="blog__title">
            <h1>Blog</h1>
          </div> */}

          <div className="article__card">
            <div className="card__img">
              <img src={Quran1} alt="Quran" />
            </div>
            <div className="content">
              <h1 className="title">Quran</h1>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                nostrum officiis perferendis dolorem delectus tempora magnam
                ipsam eaque consequatur, omnis, neque nesciunt minima excepturi
                ullam eos. Rem natus tempore eaque.
              </p>
              <a href="/blog" className="btn">
                Explore
              </a>
            </div>
          </div>

          <div className="article__card">
            <div className="card__img">
              <img src={Quran2} alt="Quran" />
            </div>
            <div className="content">
              <h1 className="title">Islam</h1>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                nostrum officiis perferendis dolorem delectus tempora magnam
                ipsam eaque consequatur, omnis, neque nesciunt minima excepturi
                ullam eos. Rem natus tempore eaque.
              </p>
              <a href="/blog" className="btn">
                Explore
              </a>
            </div>
          </div>
          <div className="article__card">
            <div className="card__img">
              <img src={Quran1} alt="Quran" />
            </div>
            <div className="content">
              <h1 className="title">Ramzan</h1>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                nostrum officiis perferendis dolorem delectus tempora magnam
                ipsam eaque consequatur, omnis, neque nesciunt minima excepturi
                ullam eos. Rem natus tempore eaque.
              </p>
              <a href="/blog" className="btn">
                Explore
              </a>
            </div>
          </div>
          <div className="article__card">
            <div className="card__img">
              <img src={Quran2} alt="Quran" />
            </div>
            <div className="content">
              <h1 className="title">Prayer</h1>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                nostrum officiis perferendis dolorem delectus tempora magnam
                ipsam eaque consequatur, omnis, neque nesciunt minima excepturi
                ullam eos. Rem natus tempore eaque.
              </p>
              <a href="/blog" className="btn">
                Explore
              </a>
            </div>
          </div>
          <div className="article__card">
            <div className="card__img">
              <img src={Quran1} alt="Quran" />
            </div>
            <div className="content">
              <h1 className="title">Recitation</h1>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                nostrum officiis perferendis dolorem delectus tempora magnam
                ipsam eaque consequatur, omnis, neque nesciunt minima excepturi
                ullam eos. Rem natus tempore eaque.
              </p>
              <a href="/blog" className="btn">
                Explore
              </a>
            </div>
          </div>
          <div className="article__card">
            <div className="card__img">
              <img src={Quran2} alt="Quran" />
            </div>
            <div className="content">
              <h1 className="title">Helping others</h1>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                nostrum officiis perferendis dolorem delectus tempora magnam
                ipsam eaque consequatur, omnis, neque nesciunt minima excepturi
                ullam eos. Rem natus tempore eaque.
              </p>
              <a href="/blog" className="btn">
                Explore
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
