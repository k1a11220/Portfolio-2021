import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import { slide as Menu } from "react-burger-menu";

const Navigation = () => {
  return (
    <section className="container">
      <nav className={styles.nav_wrapper}>
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
          <p>Contact</p>
        </div>
      </nav>
    </section>
  );
};

export default Navigation;
