import { useState } from "react";
import { Dua } from "./Dua";

const Hero = () => {
  const [prayer, setPrayer] = useState(false);

  const handleChange = (event) => {
    setPrayer(event.target.value);
  };

  const data = Dua.find((item) => item.id === prayer);

  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="main__title">
            <h2 className="above__title">Duaa</h2>
            <h2 className="below__title">on your fingertips.</h2>
          </div>
          <div className="dropdown">
            <select className="hero__dropdown" onChange={handleChange}>
              <option value={useState}>Select Emotion</option>
              <option value="Angry">Angry</option>
              <option value="Anxious">Anxious</option>
              <option value="Aroused">Aroused</option>
              <option value="Confident">Confident</option>
              <option value="Confused">Confused</option>
              <option value="Curious">Curious</option>
              <option value="Defeated">Defeated</option>
              <option value="Depressed">Depressed</option>
              <option value="Desire">Desire</option>
              <option value="Desperate">Desperate</option>
              <option value="Disbelief">Disbelief</option>
              <option value="Guilty">Guilty</option>
              <option value="Hatred">Hatred</option>
              <option value="Humiliated">Humiliated</option>
              <option value="Hurt">Hurt</option>
              <option value="Impatient">Impatient</option>
              <option value="Insecure">Insecure</option>
              <option value="Sad">Sad</option>
            </select>
          </div>

          <div className="prayer">
            {data && (
              <div className="prayer__table">
                <h2 className="title">{data.title}</h2>
                <p className="arabic">{data.arabic}</p>
                <p className="urdu">{data.urdu}</p>
                <p className="translitration">{data.translitration}</p>
                <p className="translation">{data.translation}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
