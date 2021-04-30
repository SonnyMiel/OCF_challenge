import { useEffect, useReducer, useState } from "react";
import { useLazyQuery } from "@apollo/client";

import { getMedias, getMediaWithFilter } from "api/anilist";

import { useDidUpdateEffect } from "hooks/useDidUpdate";
import { Category } from "models/category";
import { getNextSeason, getSeason } from "utils/seasons";

import SearchForm from "./Form/searchForm";
import SearchResults from "./Results/searchResults";

import styles from "./search.module.scss";
import { ADD_GENRE, ADD_TAG, DELETE_ALL, SET_SEARCH } from "models/constant";

export interface SearchProps {
  medias: Category;
  genres: string[];
  tags: string[];
}

const filterReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_GENRE:
      return Object.assign({}, state, {
        genres: [...state.genres, action.payload],
      });
    case ADD_TAG:
      return Object.assign({}, state, {
        tags: [...state.tags, action.payload],
      });
    case DELETE_ALL:
      return Object.assign({}, state, { genres: [], tags: [] });
    case SET_SEARCH:
      return Object.assign({}, state, { search: action.payload });
    default:
      throw new Error("action not handled");
  }
};

export const Search: React.FC<SearchProps> = (props: SearchProps) => {
  const [isFiltered, setIsFiltered] = useState(false);
  const [filterOptions, dispatch] = useReducer(filterReducer, {
    genres: [],
    tags: [],
    search: "",
  });
  const [medias, setMedias] = useState<Category>(props.medias);
  const [fetchMediasWithFilter,{ data: mediasWithFilter, loading: filterLoading },] = useLazyQuery(getMediaWithFilter);
  const [fetchMedias, { data: allMedias, loading: allLoading }] = useLazyQuery(getMedias);

  useEffect(() => console.log("isFiltered >> ", isFiltered), [isFiltered]);

  useDidUpdateEffect(() => {if (!filterLoading && mediasWithFilter && mediasWithFilter.filtered) setMedias(mediasWithFilter);}, [filterLoading]);
  useDidUpdateEffect(() => {if (!allLoading && allMedias && allMedias.trending) setMedias(allMedias);}, [allLoading]);
  useDidUpdateEffect(() => handleFilter(filterOptions), [filterOptions]);

  const handleFilter = ({ search, genres, tags }) => {
    if (search || genres.length || tags.length) {
      console.log({
        search: search.length ? search : undefined,
        genres: genres.length ? genres : undefined,
        tags: tags.length ? tags : undefined,
      });
      fetchMediasWithFilter({
        variables: {
          search: search.length ? search : undefined,
          genres: genres.length ? genres : undefined,
          tags: tags.length ? tags : undefined,
        },
      });
      setIsFiltered(true);
    } else {
      const date = new Date();
      const [season, index] = getSeason(date);
      const nextSeason = getNextSeason(index);
      fetchMedias({
        variables: {
          search: undefined,
          genre: undefined,
          tag: undefined,
          nextSeason,
          nextYear: date.getFullYear(),
          season,
          seasonYear: date.getFullYear(),
        },
      });
      setIsFiltered(false);
    }
  };

  return (
    <div className={`container ${styles["search__container"]}`}>
      <div className={styles["search__filters"]}>
        <SearchForm
          genres={props.genres}
          tags={props.tags}
          handleDispatch={dispatch}
          options={filterOptions}
        />
      </div>
      {filterLoading || allLoading ? (
        <p>Loading</p>
      ) : isFiltered ? (
        medias?.filtered ? (
          <SearchResults medias={medias.filtered.media} />
        ) : (
          <p>No Results</p>
        )
      ) : (
        <>
          <div>
            <a>
              <h3>TRENDING NOW</h3>
              <p>View All</p>
            </a>
            {medias?.trending && (
              <SearchResults medias={medias.trending.media} />
            )}
          </div>
          <div>
            <a>
              <h3>POPULAR THIS SEASON</h3>
              <p>View All</p>
            </a>
            {medias?.season && <SearchResults medias={medias.season.media} />}
          </div>
          <div>
            <a>
              <h3>UPCOMING NEXT SEASON</h3>
              <p>View All</p>
            </a>
            {medias?.nextSeason && (
              <SearchResults medias={medias.nextSeason.media} />
            )}
          </div>
          <div>
            <a>
              <h3>ALL TIME POPULAR</h3>
              <p>View All</p>
            </a>
            {medias?.popular && <SearchResults medias={medias.popular.media} />}
          </div>
          <div>
            <a>
              <h3>TOP 100 ANIME</h3>
              <p>View All</p>
            </a>
            {medias?.top && (
              <SearchResults medias={medias.top.media} isInline />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
