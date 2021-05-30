import { css } from "@emotion/react";

const GlobalStyle = css`
  * {
    margin: 0;
    padding: 0;
    font-family: "Roboto", "Spoqa Han Sans Neo", sans-serif;
    text-decoration: none;
    color: #222222;
  }

  li {
    list-style: none;
  }

  html,
  body {
    width: 100vw;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    text-rendering: optimizeLegibility;
    font-size: 16px;
  }

  h1 {
    font-size: 3rem; // 48px
  }

  h2 {
    font-size: 2rem; // 32px
  }

  h3 {
    font-size: 1.5rem; // 24px
    line-height: 2.25rem; // 36px
  }

  h4 {
    font-size: 1rem;
  }

  p {
    font-size: 1.125rem; // 18px
    line-height: 1.75rem; // 28px
    word-break: keep-all;
  }

  a {
    font-size: 1.125rem;
    line-height: 1.75rem;
    word-break: keep-all;
  }

  @media screen and (max-width: 1400px) {
  }
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export default GlobalStyle;
