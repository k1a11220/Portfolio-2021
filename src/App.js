import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
// import Cursor from "./components/Cursor";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Work from "./routes/Work";
import About from "./routes/About";
import Bside from "./routes/Bside";
import OLED from "./routes/OLED";
// import Contact from "./components/Contact";

function App() {
  return (
    <>
      {/* <Contact /> */}
      <section className="center_wrapper">
        <HashRouter>
          {/* <Cursor /> */}
          <Navigation />
          <Route path="/" exact={true} component={Work} />
          <Route path="/Work" component={Work} />
          <Route path="/About" component={About} />
          <Route path="/Bside" component={Bside} />
          <Route path="/OLED" component={OLED} />
          <Footer />
        </HashRouter>
      </section>
    </>
  );
}

export default App;
