import { useEffect } from "react";

import { Category } from "models/category";

import SearchForm from "./Form";
import SearchResults from "./Results/searchResults";
import styles from "./search.module.scss";

export interface SearchProps {
  medias: Category;
}

export const Search: React.FC<SearchProps> = (props: SearchProps) => {
  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <div className={`container ${styles["search__container"]}`}>
      <SearchForm />
      <div>
        <a>
          <h3>TRENDING NOW</h3>
          <p>View All</p>
        </a>
        <SearchResults medias={props.medias.trending}/>
      </div>
      <div>
        <a>
          <h3>POPULAR THIS SEASON</h3>
          <p>View All</p>
        </a>
        <SearchResults medias={props.medias.season}/>
      </div>
      <div>
        <a>
          <h3>UPCOMING NEXT SEASON</h3>
          <p>View All</p>
        </a>
        <SearchResults medias={props.medias.nextSeason}/>
      </div>
      <div>
        <a>
          <h3>ALL TIME POPULAR</h3>
          <p>View All</p>
        </a>
        <SearchResults medias={props.medias.popular}/>
      </div>
      <div>
        <a>
          <h3>TOP 100 ANIME</h3>
          <p>View All</p>
        </a>
        <SearchResults medias={props.medias.top} isInline/>
      </div>
    </div>
  );
};

export default Search;
