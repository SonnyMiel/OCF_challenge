import styles from "./index.module.scss";

export interface LandingProps {}

export const Landing: React.FC<LandingProps> = (props: LandingProps) => {
  return (
    <div className="container">
      <h1 className="title">The next-generation anime platform</h1>
      <h2 className="subTitle">
        Track, share, and discover your favorite anime and manga with AniList.
      </h2>
      <div className="items">
        <div className="item">
          <div className="icon"></div>
          <div className="content">
            <h3>Discover your obsessions</h3>
            <p>
              What are your highest rated genres or most watched voice actors?
              Follow your watching habits over time with in-depth statistics.
            </p>
          </div>
        </div>
        <div className="item">
          <div className="icon"></div>
          <div className="content">
            <h3>Bring AniList anywhere</h3>
            <p>Keep track of your progress on-the-go with one of many AniList apps across iOS, Android, macOS, and Windows.</p>
          </div>
        </div>
        <div className="item">
          <div className="icon"></div>
          <div className="content">
            <h3>Join the conversation</h3>
            <p>Share your thoughts with our thriving community, make friends, socialize, and receive recommendations.</p>
          </div>
        </div>
        <div className="item">
          <div className="icon"></div>
          <div className="content">
            <h3>Tweak it to your liking</h3>
            <p>Customize your scoring system, title format, color scheme, and much more! Also, we have a dark mode.</p>
          </div>
        </div>
      </div>
      <a className="joinButton">
        <span>Join Now</span>
        <span>icon</span>
      </a>
    </div>
  );
};

export default Landing;
