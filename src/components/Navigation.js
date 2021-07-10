import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const Navbar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 50;
  height: 64px;
  border-bottom: 1px solid transparent;
  background-color: #ffffff;
  left: 0;
  transition: background-color 0.2s ease;
  border-bottom: solid 1px #ebebeb;
  & a {
    text-decoration: none;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: auto;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: auto;
  @media (max-width: 1400px) {
    width: 92%;
  }
  @media (max-width: 639px) {
    justify-content: space-between;
  }
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  & a {
    color: #1d1d1f;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  flex: 1;
  overflow-y: hidden;
  max-height: 100%;
  justify-content: space-between;
  transition: 0.44s 0.2s cubic-bezier(0.52, 0.16, 0.24, 1),
    height 0.56s cubic-bezier(0.52, 0.16, 0.24, 1);

  @media (max-width: 639px) {
    width: 100%;
    flex-direction: column;
    position: absolute;
    top: 64px;
    left: 0;
    max-height: 0;
    border-bottom: solid 1px #ebebeb;

    &.expanded {
      max-height: 100vh;
      height: auto;
    }
  }
`;

const StyledBurger = styled.button`
  display: none;
  flex-direction: column;
  align-self: center;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  @media (max-width: 639px) {
    display: flex;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 1.5rem;
    height: 0.125rem;
    background: #1d1d1f;
    border-radius: 10px;
    transition: 0.44s 0.2s cubic-bezier(0.52, 0.16, 0.24, 1),
      height 0.56s cubic-bezier(0.52, 0.16, 0.24, 1);
    position: relative;
    transform-origin: 1px;

    :first-of-type {
      transform: ${({ clicked }) => (clicked ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-of-type(2) {
      opacity: ${({ clicked }) => (clicked ? "0" : "1")};
      transform: ${({ clicked }) =>
        clicked ? "translateX(30px)" : "translateX(0)"};
    }

    :nth-of-type(3) {
      transform: ${({ clicked }) => (clicked ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-x: hidden;
  padding: 0;
  margin: 0;
  background-color: #ffffff;
  @media (max-width: 639px) {
    flex-direction: column;
  }
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  margin-left: 40px;

  @media (max-width: 639px) {
    width: 92%;
    margin: 18px 0px;
  }

  & a {
    font-size: 16px;
    font-weight: 400;
    transition: all 0.2s ease-in-out;
    color: #1d1d1f;
  }
  & a:hover {
    transition: all 0.2s ease-in-out;
    color: #086bce;
  }
`;

const Navigation = () => {
  const [clicked, setClicked] = useState(true);
  const click = () => {
    setClicked(!clicked);
  };

  return (
    <Navbar>
      <Container>
        <Wrapper>
          <Logo>
            <Link to="/"> Beomsoo Son </Link>
          </Logo>
          <ItemContainer className={clicked ? null : "expanded"}>
            <ItemWrapper></ItemWrapper>
            <ItemWrapper>
              <Item>
                <Link to="/about">About</Link>
              </Item>
              <Item>
                <a
                  href="https://blog.beomsoo.me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </Item>
              <Item>
                <Link to="/">Contact</Link>
              </Item>
            </ItemWrapper>
          </ItemContainer>
          <StyledBurger clicked={!clicked} onClick={click}>
            <div />
            <div />
            <div />
          </StyledBurger>
        </Wrapper>
      </Container>
    </Navbar>
  );
};

export default Navigation;
