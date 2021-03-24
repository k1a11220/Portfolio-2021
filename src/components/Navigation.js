import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import "./Hamburger.css";

const Navigation = () => {
  const [hamburger, setHamburger] = useState(false);

  const showMenu = () => {
    setHamburger(!hamburger);
  };

  const hideMenu = () => {
    setHamburger(!hamburger);
  };

  return (
    <>
      <section className="container">
        <nav
          className={styles.nav_wrapper}
          style={{ marginBottom: hamburger ? 0 : "20px" }}
        >
          <div className={styles.logo}>
            <Link to="/Work">
              <p>Beomsoo Son</p>
            </Link>
          </div>
          <div className={styles.select_area}>
            <Link to="/Work">
              <p>Work</p>
            </Link>
            <Link to="/About">
              <p>About</p>
            </Link>
            <Link>
              <p>B-side</p>
            </Link>
            <p>Contact</p>
          </div>
          <div className={styles.hamburger_container}>
            <label for="check">
              <input type="checkbox" id="check" onClick={showMenu} />
              <span className={hamburger ? "bar1_checked" : ""}></span>
              <span className={hamburger ? "bar2_checked" : ""}></span>
              <span className={hamburger ? "bar3_checked" : ""}></span>
            </label>
          </div>
        </nav>
      </section>
      <div
        className={styles.hamburger_menu}
        style={{
          opacity: hamburger ? 1 : 0,
          top: hamburger ? "0px" : "-200px",
          marginBottom: hamburger ? "4px" : "0px",
          height: hamburger ? "200px" : "0px",
        }}
      >
        <div>
          <Link to="/Work">
            <p onClick={hideMenu}>Work</p>
          </Link>
          <Link to="/About">
            <p onClick={hideMenu}>About</p>
          </Link>
          <Link>
            <p onClick={hideMenu}>B-side</p>
          </Link>
          <p onClick={hideMenu}>Contact</p>
        </div>
      </div>
    </>
  );
};

export default Navigation;
