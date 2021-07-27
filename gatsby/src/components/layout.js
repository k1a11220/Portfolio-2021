import * as React from "react";
import { Link } from "gatsby";
import Navigation from "./navigation";
import Footer from "./footer";
import GlobalStyle from "../styles/globalStyle";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  if (isRootPath) {
    header = <h1>{/* <Link to="/">{title}</Link> */}</h1>;
  } else {
    header = <Link to="/">{title}</Link>;
  }

  return (
    <GlobalStyle>
      <div data-is-root-path={isRootPath}>
        <Navigation />
        <header>{header}</header>
        <main>{children}</main>
        <Footer />
      </div>
    </GlobalStyle>
  );
};

export default Layout;
