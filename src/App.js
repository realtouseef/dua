//styling file
import "./styles/main.scss";

//components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Contact />
      <Footer /> */}
    </>
  );
};

export default App;
