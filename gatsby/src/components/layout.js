import * as React from "react";
import { Link } from "gatsby";
import Navigation from "./navigation";
import Footer from "./footer";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  if (isRootPath) {
    header = (
      <h1>
        <Link to="/">{title}</Link>
      </h1>
    );
  } else {
    header = <Link to="/">{title}</Link>;
  }

  return (
    <div data-is-root-path={isRootPath}>
      <Navigation />
      <header>{header}</header>
      <main>{children}</main>
      <Footer />
      <footer>
        © {new Date().getFullYear()}, Built with
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
