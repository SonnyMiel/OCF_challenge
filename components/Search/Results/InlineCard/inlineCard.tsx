import { Media } from "models/media";
import { CgSmileNeutral } from "react-icons/cg";
import { HiOutlineEmojiHappy, HiOutlineEmojiSad } from "react-icons/hi";
import styles from "./inlineCard.module.scss";

export interface InlineCardProps {
  media: Media;
  rank: number;
}

export const InlineCard: React.FC<InlineCardProps> = ({
  media,
  rank,
}: InlineCardProps) => {
  return (
    <div className={styles["inlineCard__container"]}>
      <div className={styles["inlineCard__rank"]}>
        <span>#</span>
        {rank + 1}
      </div>
      <a href="" className={styles["inlineCard__cover"]}>
        <img
          src={media.coverImage.large}
          alt={`Cover image of ${media.title.english}`}
        />
      </a>
      <div className={styles["inlineCard__details"]}>
        <div className={styles["inlineCard__title"]}>
          <p>
            <a>{media.title.english}</a>
          </p>
          <div className={styles["inlineCard__genres"]}>
            {media.genres &&
              media.genres
                .slice(0, 4)
                .map((genre) => (
                  <a style={{ background: media.coverImage.color }}>
                    {genre}
                  </a>
                ))}
          </div>
        </div>
        <div className={styles["inlineCard__score"]}>
          {media.averageScore > 70 ? (
            <HiOutlineEmojiHappy color="green" />
          ) : media.averageScore < 50 ? (
            <HiOutlineEmojiSad color="red" />
          ) : (
            <CgSmileNeutral color="orange" />
          )}
          <div className={styles["inlineCard__pct"]}>
            <p>{media.averageScore}%</p>
            <p>{media.popularity} users</p>
          </div>
        </div>
        <div className={styles["inlineCard__format"]}>
          <p>{media.format}</p>
          <p>
            {media.format !== "MOVIE" ? (
              <span>{media.episodes} episodes</span>
            ) : (
              <span>{media.duration} minutes</span>
            )}
          </p>
        </div>
        <div className={styles["inlineCard__date"]}>
          <p>
            {media.startDate.year === media.endDate.year
              ? `${media.season} ${media.endDate.year}`
              : `${media.startDate.year} - ${media.endDate.year}`}
          </p>
          <p>{media.status}</p>
        </div>
      </div>
    </div>
  );
};

export default InlineCard;
