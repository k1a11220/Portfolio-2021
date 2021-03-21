import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <ul className={styles.footer_wrapper}>
        <li className={styles.footer_info}>
          <div>
            <h3 className={styles.title}>Let’s make history together.</h3>
            <a className={styles.details} href="mailto:beskar.son@gmail.com">
              beskar.son@gmail.com
            </a>
          </div>
          <div>
            <h3 className={styles.title}>Welcome to visit.</h3>
            <a
              className={styles.details}
              href="https://www.instagram.com/beomsoo_son/"
            >
              Instagram
            </a>
            <a
              className={styles.details}
              href="https://www.behance.net/sonbeomsoo"
            >
              Behance
            </a>
            <a
              className={styles.details}
              href="https://www.linkedin.com/in/beomsoo-son-65a201178/"
            >
              LinkedIn
            </a>
          </div>
        </li>
        <li>
          <p className={styles.copyright}>
            Copyright © 2021 Beomsoo Son. All rights reserved.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
