import styles from "./footer.module.scss";

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  return (
    <div className={`${styles["landing__container"]}`}>
      <div className={styles["landing__container-wrap"]}>
        <div className={styles["landing__themes"]}>
          <h2>Site Theme</h2>
          <button
            className={`
              ${styles["landing__theme-preview"]}
              ${styles["landing__theme-preview--default"]}
            `}
          >
            A
          </button>
          <button
            className={`
              ${styles["landing__theme-preview"]}
              ${styles["landing__theme-preview--dark"]}
            `}
          >
            A
          </button>
          <button
            className={`
              ${styles["landing__theme-preview"]}
              ${styles["landing__theme-preview--contrast"]}
            `}
          >
            A
          </button>
        </div>
        <div className={styles["landing__wrap-links"]}>
          <div className={styles["landing__links"]}>
            <ul>
              <li>
                <a href="">AniList.co</a>
              </li>
              <li>
                <a href="">AniCHart.net</a>
              </li>
              <li>
                <a href="">Donate</a>
              </li>
            </ul>
          </div>
          <div className={styles["landing__links"]}>
            <ul>
              <li>
                <a href="">Apps</a>
              </li>
              <li>
                <a href="">Site Stats</a>
              </li>
              <li>
                <a href="">Recommendations</a>
              </li>
              <li>
                <a href="">API</a>
              </li>
            </ul>
          </div>
          <div className={styles["landing__links"]}>
            <ul>
              <li>
                <a href="">Discord</a>
              </li>
              <li>
                <a href="">Twitter</a>
              </li>
              <li>
                <a href="">Facebook</a>
              </li>
              <li>
                <a href="">GitHub</a>
              </li>
            </ul>
          </div>
          <div className={styles["landing__links"]}>
            <ul>
              <li>
                <a href="">Add Data</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Term & Privacy</a>
              </li>
              <li>
                <a href="">Site Map</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
