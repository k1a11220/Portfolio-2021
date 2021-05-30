import { css } from "@emotion/react";

const GlobalStyle = css`
  * {
    margin: 0;
    padding: 0;
    font-family: "Roboto", "Spoqa Han Sans Neo", sans-serif;
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
    font-size: 100px;
  }

  h2 {
    font-size: 22px;
  }

  h3 {
    font-size: 18px;
    line-height: 1.6em;
    margin-bottom: 0.625rem;
  }

  h4 {
    font-size: 16px;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.75rem;
    word-break: keep-all;
  }

  a {
    font-size: 1.125rem;
    line-height: 1.75rem;
    word-break: keep-all;
  }
`;

export default GlobalStyle;
