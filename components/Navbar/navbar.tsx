import { useState } from "react";

import Dropdown from './Dropdown/dropdown';

import styles from "./navbar.module.scss";

export interface MenuProps {}

export const Menu: React.FC<MenuProps> = (props: MenuProps) => {
  return (
    <div className={`container ${styles["container-nav"]}`}>
      <div className={styles["nav-centered"]}>
        <a href="#">
          <img src="/logo.svg" alt="AniList Logo" />
        </a>
        <div className={styles["nav-actions"]}>
            <span className={styles["nav-trigger-dropdown"]}>
              <a href="#">Browse</a>
              <Dropdown className={styles["nav-dropdown"]}/>
            </span>
            <span><a href="#">Social</a></span>
            <span><a href="#">Forum</a></span>
            <a href="#" className={`${styles["nav-btn"]} btn`}>Login</a>
            <a href="#" className="btn btn-secondary">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
