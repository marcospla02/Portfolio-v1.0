import "./App.css";
import Home from "./Components/Home/Home";
import { Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  return (
    <div className="app">
      <div className="bkg" />
      <div className="container" data-aos="flip-left" data-aos-duration="1500">
        <Route exact path="/" component={Home} />
        <Route exact path="/Technologies" component={""} />
        <Route exact path="/Projects" component={""} />
        <Route exact path="/Contact" component={""} />
      </div>
    </div>
  );
}
AOS.init();

export default App;
