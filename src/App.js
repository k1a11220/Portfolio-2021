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
import Padintosh from "./routes/Padintosh";
import FireAlarm from "./routes/FireAlarm";
import ALD from "./routes/ALD";
import Bokdda from "./routes/Bokdda";
import Hydrogen from "./routes/Hydrogen";
import Toothbrush from "./routes/Toothbrush";
import JavaraLight from "./routes/JavaraLight";
import LiquidHydrogen from "./routes/LiquidHydrogen";
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
          <Route path="/Padintosh" component={Padintosh} />
          <Route path="/FireAlarm" component={FireAlarm} />
          <Route path="/ALD" component={ALD} />
          <Route path="/Bokdda" component={Bokdda} />
          <Route path="/Hydrogen" component={Hydrogen} />
          <Route path="/Toothbrush" component={Toothbrush} />
          <Route path="/JavaraLight" component={JavaraLight} />
          <Route path="/LiquidHydrogen" component={LiquidHydrogen} />

          <Footer />
        </HashRouter>
      </section>
    </>
  );
}

export default App;
