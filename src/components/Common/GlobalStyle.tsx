import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
 @import url('https://fonts.googleapis.com/css2?family=Oxygen+Mono&display=swap');
 @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@500&display=swap');

  * {
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.fontColor};
    transition: background-color 0.2s ease;

    &:not(code > span) {
      font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
  }
  
  html,
  body {
    width: 100vw;
    background-color: ${(props) => props.theme.bgColor};
    display: flex;
    justify-content: center;
    text-rendering: optimizeLegibility;
    font-size: 16px;
  }

  p, a, li {
    font-weight: 400;
    text-decoration: none;
  }
`;
