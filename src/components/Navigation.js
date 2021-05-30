import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Hamburger.css";

import styled from "@emotion/styled";

const Container = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  z-index: 2;
  transition: all 0.5s ease-in-out;

  border-bottom: solid 1px #f3f3f3;
`;

const SelectArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transition: all 0.5s ease-in-out;

  & p,
  a {
    font-size: 1rem; //16px
    margin-left: 2.5rem; //40px
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const HamburgerContainer = styled.div`
  display: none;
  flex-direction: column;
  justify-content: flex-end;
  transition: all 0.5s ease-in-out;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: flex-end;
  }
`;

const Navigation = () => {
  const [hamburger, setHamburger] = useState(false);

  const showMenu = () => {
    setHamburger(!hamburger);
  };

  const hideMenu = () => {
    setHamburger(!hamburger);
  };

  const Wrapper = styled.nav`
    width: 75rem; // 1200px
    height: ${hamburger === false ? "4.875rem" : "20rem"}; //78px
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 4.875rem;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 1400px) {
      width: 90vw;
    }

    @media screen and (max-width: 768px) {
      display: grid;
      align-items: flex-start;
      position: relative;
      top: 1.625rem;
      width: 90vw;
    }
  `;

  const HamburgerMenu = styled.div`
    display: ${hamburger === false ? "none" : "flex"};
    flex-direction: column;
    transition: all 0.5s ease-in-out;

    & p,
    a {
      height: 3rem;
    }
  `;

  return (
    <Container>
      <Wrapper>
        <>
          <Link to="/Work" style={{ fontSize: "1.25rem", fontWeight: "600" }}>
            Beomsoo Son
          </Link>
          <SelectArea>
            <Link to="/Work">Work</Link>
            <Link to="/About">About</Link>
            <a href="https://www.beomsoo.me">Blog</a>
            <a href="mailto: beskar.son@gmail.com">Contact</a>
          </SelectArea>
        </>
        <HamburgerContainer>
          <label htmlFor="check">
            <input type="checkbox" id="check" onClick={showMenu} />
            <span className={hamburger ? "bar1_checked" : ""}></span>
            <span className={hamburger ? "bar2_checked" : ""}></span>
            <span className={hamburger ? "bar3_checked" : ""}></span>
          </label>
        </HamburgerContainer>
        <HamburgerMenu>
          <Link to="/Work" onClick={hideMenu}>
            Work
          </Link>
          <Link to="/About" onClick={hideMenu}>
            About
          </Link>
          <a href="https://www.beomsoo.me">Blog</a>
          <a href="mailto: beskar.son@gmail.com">Contact</a>
        </HamburgerMenu>
      </Wrapper>
    </Container>
  );
};

export default Navigation;
