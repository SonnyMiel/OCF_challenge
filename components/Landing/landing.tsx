import { IoIosArrowDroprightCircle } from 'react-icons/io';

import styles from "./landing.module.scss";

export interface LandingProps {}

export const Landing: React.FC<LandingProps> = (props: LandingProps) => {
  return (
    <div className={`container ${styles["container-landing"]}`}>
      <h1>The next-generation anime platform</h1>
      <h2>
        Track, share, and discover your favorite anime and manga with AniList.
      </h2>
      <div className={styles["items"]}>
        <div className={styles["item"]}>
          <div><img src="/stats.svg" alt="icon of statistics"/></div>
          <div>
            <h3>Discover your obsessions</h3>
            <p>
              What are your highest rated genres or most watched voice actors?
              Follow your watching habits over time with in-depth statistics.
            </p>
          </div>
        </div>
        <div className={styles["item"]}>
          <div><img src="/apps.svg" alt="icon of a smartphone"/></div>
          <div>
            <h3>Bring AniList anywhere</h3>
            <p>
              Keep track of your progress on-the-go with one of many AniList
              apps across iOS, Android, macOS, and Windows.
            </p>
          </div>
        </div>
        <div className={styles["item"]}>
          <div><img src="/social.svg" alt="icon of social media"/></div>
          <div>
            <h3>Join the conversation</h3>
            <p>
              Share your thoughts with our thriving community, make friends,
              socialize, and receive recommendations.
            </p>
          </div>
        </div>
        <div className={styles["item"]}>
          <div><img src="/custom.svg" alt="icon of paint stand"/></div>
          <div>
            <h3>Tweak it to your liking</h3>
            <p>
              Customize your scoring system, title format, color scheme, and
              much more! Also, we have a dark mode.
            </p>
          </div>
        </div>
      </div>
      <a className={`btn btn-secondary ${styles["btn"]}`}>
        <div>Join Now</div>
        <div><IoIosArrowDroprightCircle size={"37px"}/></div>
      </a>
    </div>
  );
};

export default Landing;
