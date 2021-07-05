/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

import { Global } from "@emotion/react";
import global from "./styles/global";

import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

import ScrollToTop from "./hooks/ScrollToTop";

import Work from "./routes/Work";
import About from "./routes/About";

import OLED from "./projects/OLED";
import Padintosh from "./projects/Padintosh";
import FireAlarm from "./projects/FireAlarm";
import ALD from "./projects/ALD";
import Bokdda from "./projects/Bokdda";
import Hydrogen from "./projects/Hydrogen";
import Toothbrush from "./projects/Toothbrush";
import JavaraLight from "./projects/JavaraLight";
import LiquidHydrogen from "./projects/LiquidHydrogen";

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
      <HashRouter>
        <Switch>
          <Wrapper>
            <ScrollToTop />
            <Navigation />
            <Route path="/" exact={true} component={Work} />
            <Route path="/Work" component={Work} />
            <Route path="/About" component={About} />
            <Route path="/OLED" component={OLED} />
            <Route path="/Padintosh" component={Padintosh} />
            <Route path="/FireAlarm" component={FireAlarm} />
            <Route path="/ALD" component={ALD} />
            <Route path="/Bokdda" component={Bokdda} />
            <Route path="/Hydrogen" component={Hydrogen} />
            <Route path="/Toothbrush" component={Toothbrush} />
            <Route path="/JavaraLight" component={JavaraLight} />
            <Route path="/LiquidHydrogen" component={LiquidHydrogen} />
            <Route>
              <Redirect to="/" component={Work} />
            </Route>
            <Footer />
          </Wrapper>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
