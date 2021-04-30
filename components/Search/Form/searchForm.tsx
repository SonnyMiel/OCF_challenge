import { Dispatch, useState } from "react";
import { BiSearch, BiSlider } from "react-icons/bi";
import { FiDelete } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

import styles from "./searchForm.module.scss";

export interface SearchFormProps {
  genres: string[];
  tags: string[];
  handleDispatch: Dispatch<any>
  options: { search: string; genres: string[]; tags: string[]}
}

export const SearchForm: React.FC<SearchFormProps> = ({
  genres,
  tags,
  handleDispatch,
  options,
}: SearchFormProps) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  return (
    <>
      <div className={styles["searchForm__filters"]}>
        <div className={styles["searchForm__filter"]}>
          <p>Search</p>
          <div className={styles["search__input"]}>
            <BiSearch color="grey" />
            <input
              type="search"
              autoComplete="off"
              value={options.search}
              onChange={(e) => handleDispatch({type: 'setSearch', payload:e.target.value})}
            />
          </div>
        </div>
        <div className={styles["searchForm__filter"]}>
          <p>Genres</p>
          <div className={styles["searchForm__select-wrap"]} tabIndex={-1}>
            <div className={styles["select__input"]} onClick={() => setIsDropdownVisible(previous => !previous)}>
              {options.genres.length || options.tags.length ? (
                <>
                  <div>
                    {
                      <div style={{ marginRight: 12 }}>
                        {options.genres[0] || options.tags[0]}
                      </div>
                    }
                    {options.genres.length + options.tags.length > 1 && (
                      <div>+{options.genres.length + options.tags.length - 1}</div>
                    )}
                  </div>
                  <FiDelete
                    color="grey"
                    onClick={() => {
                      handleDispatch({type: 'deleteAll'});
                      setIsDropdownVisible(false);
                    }}
                  />
                </>
              ) : (
                <>
                  <input type="search" autoComplete="off" placeholder="Any" />
                  <IoIosArrowDown
                    color="grey"
                    onClick={() => setIsDropdownVisible(true)}
                  />
                </>
              )}
            </div>
            {isDropdownVisible && (
              <div className={styles["searchForm__select-options"]}>
                <div>
                  <div className={styles["options__title"]}>genres</div>
                  {genres &&
                    genres.map((genre) => (
                      <div
                        className={styles["options__option"]}
                        onClick={() => {
                          handleDispatch({type: 'addGenre', payload:genre});
                          setIsDropdownVisible(false);
                        }
                        }
                      >
                        <label>{genre}</label>
                      </div>
                    ))}
                  {tags && (
                    <>
                      <div className={styles["options__title"]}>tags</div>
                      {tags.map((tag) => (
                        <div
                          className={styles["options__option"]}
                          onClick={() => {
                            handleDispatch({type: 'addTag', payload:tag});
                            setIsDropdownVisible(false);
                          }
                          }
                        >
                          <label>{tag}</label>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={styles["searchForm__filter"]}>
          <p>Year</p>
          <div className={styles["searchForm__select-wrap"]} tabIndex={-1}>
            <div className={styles["select__input"]}>
              <input type="search" autoComplete="off" placeholder="Any" />
              <IoIosArrowDown color="grey" />
            </div>
          </div>
        </div>
        <div className={styles["searchForm__filter"]}>
          <p>Season</p>
          <div className={styles["searchForm__select-wrap"]} tabIndex={-1}>
            <div className={styles["select__input"]}>
              <input type="search" autoComplete="off" placeholder="Any" />
              <IoIosArrowDown color="grey" />
            </div>
          </div>
        </div>
        <div className={styles["searchForm__filter"]}>
          <p>Format</p>
          <div className={styles["searchForm__select-wrap"]} tabIndex={-1}>
            <div className={styles["select__input"]}>
              <input type="search" autoComplete="off" placeholder="Any" />
              <IoIosArrowDown color="grey" />
            </div>
          </div>
        </div>
        <div className={styles["searchForm__filter"]}>
          <p>Airing Status</p>
          <div className={styles["searchForm__select-wrap"]} tabIndex={-1}>
            <div className={styles["select__input"]}>
              <input type="search" autoComplete="off" placeholder="Any" />
              <IoIosArrowDown color="grey" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles["searchForm__filters-secondary"]}>
        <div>
          <BiSlider />
        </div>
      </div>
    </>
  );
};

export default SearchForm;
