import { BsFillCaretRightFill } from "react-icons/bs";
import { FaBookOpen, FaUserAstronaut, FaStar, FaThumbsUp } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';

import styles from "./dropdown.module.scss";

export interface DropdownProps {
  className: string;
}

export const Dropdown: React.FC<DropdownProps> = (props: DropdownProps) => {
  return (
    <div className={`${props.className}`}>
      <div className={styles["dropdown__content"]}>
        <div className="anime">
          <a href="#">
            <BsFillCaretRightFill />
          </a>
          <div>
            <p><a href="#">Anime</a></p>
            <p>
              <a href="#">Top 100</a>
              <a href="#">Trending</a>
              <a href="#">Top Movies</a>
            </p>
          </div>
        </div>
        <div className="manga">
          <a href="#">
            <FaBookOpen />
          </a>
          <div>
            <p><a href="#">Manga</a></p>
            <p>
              <a href="#">Top 100</a>
              <a href="#">Trending</a>
              <a href="#">Top Manhwa</a>
            </p>
          </div>
        </div>
      </div>
      <div className={styles["dropdown__footer"]}>
        <a href="#">
          <GoPerson />
          Staff
        </a>
        <a href="#">
          <FaUserAstronaut />
          Characters
        </a>
        <a href="#">
          <FaStar />
          Reviews
        </a>
        <a href="#">
          <FaThumbsUp />
          Recommendations
        </a>
      </div>
    </div>
  );
};

export default Dropdown;
