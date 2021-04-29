import { useState } from "react";
import { CgSmileNeutral } from "react-icons/cg";
import { HiOutlineEmojiHappy, HiOutlineEmojiSad } from "react-icons/hi";

import { Media } from "models/media";

import styles from "./card.module.scss";

export interface CardProps {
  media: Media;
  isRight: boolean;
}

export const Card: React.FC<CardProps> = ({ media, isRight }: CardProps) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className={`${styles["card__container"]}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <a href="#" className={styles["card__coverImage"]}>
        <img
          src={media.coverImage?.large}
          alt={`Cover image of ${media.title?.english}`}
        />
      </a>
      <a
        href="#"
        className={styles["card__title"]}
        style={{ color: isHover ? media?.coverImage?.color : "#748899" }}
      >
        {media.title?.english}
      </a>
      <div className={`${styles["card__details"]} ${isRight ? styles["card__details-right"] : ''}`}>
        <div className={styles["details__header"]}>
          <p>
            {(media.nextAiringEpisode &&
              `Ep ${media.nextAiringEpisode.episode} airing in ${Math.round(
                media.nextAiringEpisode.timeUntilAiring / (60 * 60 * 24)
              )} days`) ||
              `${media.season.toUpperCase()} ${media.startDate.year}`}
          </p>
          {media.averageScore && (
            <div className={styles["details__pct"]}>
              {media.averageScore > 70 ? (
                <HiOutlineEmojiHappy color="green" />
              ) : media.averageScore < 50 ? (
                <HiOutlineEmojiSad color="red" />
              ) : (
                <CgSmileNeutral color="orange" />
              )}
              <span>{media.averageScore}%</span>
            </div>
          )}
        </div>
        <div className={styles["details__studios"]}>
          {media.studios.edges[0].node.name}
        </div>
        <div className={styles["details__info"]}>
          <span>{media.format}</span>
          { media.episodes && 
            <>
              <span style={{padding: "0 4px"}}>•</span>
              {
                media.format !== "MOVIE" ? <span>{media.episodes} episodes</span> : <span>{media.duration} minutes</span>
              }
            </>
          }
        </div>
        <div className={styles["details__genres"]}>
          { media.genres && media.genres.slice(0, 3).map(genre => <div style={{ background: media.coverImage.color}}>{genre}</div>)}
        </div>
      </div>
    </div>
  );
};

export default Card;
