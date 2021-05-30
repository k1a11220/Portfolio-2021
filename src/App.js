import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import "./App.css";

import { Global } from "@emotion/react";
import global from "./styles/global";

import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

import ScrollToTop from "./hooks/ScrollToTop";
// import Cursor from "./components/Cursor";

import Work from "./routes/Work";
// import About from "./posts/About";
// import OLED from "./posts/OLED";
// import Padintosh from "./posts/Padintosh";
// import FireAlarm from "./posts/FireAlarm";
// import ALD from "./posts/ALD";
// import Bokdda from "./posts/Bokdda";
// import Hydrogen from "./posts/Hydrogen";
// import Toothbrush from "./posts/Toothbrush";
// import JavaraLight from "./posts/JavaraLight";
// import LiquidHydrogen from "./posts/LiquidHydrogen";

const Wrapper = styled.section`
  width: 100vw;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <>
      <Global styles={global} />
      <Wrapper>
        <BrowserRouter>
          <ScrollToTop />
          {/* <Cursor /> */}
          <Navigation />
          <Route path="/" exact={true} component={Work} />
          <Route path="/Work" component={Work} />
          {/* <Route path="/About" component={About} /> */}
          {/* <Route path="/OLED" component={OLED} />
          <Route path="/Padintosh" component={Padintosh} />
          <Route path="/FireAlarm" component={FireAlarm} />
          <Route path="/ALD" component={ALD} />
          <Route path="/Bokdda" component={Bokdda} />
          <Route path="/Hydrogen" component={Hydrogen} />
          <Route path="/Toothbrush" component={Toothbrush} />
          <Route path="/JavaraLight" component={JavaraLight} />
          <Route path="/LiquidHydrogen" component={LiquidHydrogen} /> */}
          <Footer />
        </BrowserRouter>
      </Wrapper>
    </>
  );
}

export default App;
