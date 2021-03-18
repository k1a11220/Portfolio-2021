import React, { useEffect, useState } from "react";
import { HashRouter, Route } from "react-router-dom";
import classNames from "classnames";
import "./App.css";
import Navigation from "./components/Navigation";
import About from "./routes/About";
import Work from "./routes/Work";

function App() {
  return (
    <>
      <section className="contents-wrapper">
        <HashRouter>
          <Navigation />
          <Route path="/" exact={true} component={Work} />
          <Route path="/Work" component={Work} />
          <Route path="/About" component={About} />
        </HashRouter>
      </section>
    </>
  );
}

export default App;
