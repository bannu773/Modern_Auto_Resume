import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Explore from "./components/Extrathings/Explore";
import Navbar from "./components/Extrathings/Navbar";


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center overflow-hidden">
          <Navbar />
          <Hero />
        </div>
        <div className="relative">
          <About />
          <div className="gradient-04 -z-10" />
          <Explore />
        </div>
        <div className="relative">
          {/* <TimeLine /> */}
        </div>
        <div className="relative z-0">
          <Contact />
          <div className="footer-gradient" />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
