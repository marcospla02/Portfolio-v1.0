import "./App.css";
import Home from "./Components/Home/Home";
import { Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Technologies from "./Components/Technologies/Technologies";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="app">
      {/* <div className="bkg" /> */}
      <div className="container" data-aos="flip-left" data-aos-duration="1500">
        <Route exact path="/" component={Home} />
        <Route exact path="/About-Me" component={Technologies} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Contact" component={Contact} />
      </div>
    </div>
  );
}
AOS.init();

export default App;
