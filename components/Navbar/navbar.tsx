import { useState } from "react";

import Dropdown from './Dropdown/dropdown';

import styles from "./navbar.module.scss";

export interface MenuProps {}

export const Menu: React.FC<MenuProps> = (props: MenuProps) => {
  return (
    <div className={`${styles["navbar__container"]}`}>
      <div className={styles["navbar__centered"]}>
        <a href="#">
          <img src="/logo.svg" alt="AniList Logo" />
        </a>
        <div className={styles["navbar__actions"]}>
            <span className={styles["navbar__trigger__dropdown"]}>
              <a href="#">Browse</a>
              <Dropdown className={styles["navbar__dropdown"]}/>
            </span>
            <span><a href="#">Social</a></span>
            <span><a href="#">Forum</a></span>
            <a href="#" className={`btn ${styles["navbar__btn"]}`}>Login</a>
            <a href="#" className="btn btn-secondary">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
