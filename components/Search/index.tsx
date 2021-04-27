import SearchResults from './Results';
import SearchForm from './Form';
import styles from './index.module.scss';

export interface SearchProps {
}

export const Search: React.FC<SearchProps>  = (props: SearchProps) => {
  return (
    <div className="container">
      <SearchForm />
      <div>
        <h3>TRENDING NOW</h3>
        <SearchResults category="trending" limit={6} />
      </div>
      <div>
        <h3>POPULAR THIS SEASON</h3>
        <SearchResults category="popular" limit={6} />
      </div>
      <div>
        <h3>UPCOMING NEXT SEASON</h3>
        <SearchResults category="upcoming" limit={6} />
      </div>
      <div>
        <h3>ALL TIME POPULAR</h3>
        <SearchResults category="alltime" limit={6} />
      </div>
      <div>
        <h3>TOP 100 ANIME</h3>
        <SearchResults category="top100" detailed limit={10} />
      </div>
    </div>
  );
};

export default Search;
