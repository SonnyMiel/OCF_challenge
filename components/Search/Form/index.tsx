import styles from './index.module.scss';

export interface SearchFormProps {
}

export const SearchForm: React.FC<SearchFormProps>  = (props: SearchFormProps) => {
  return (
    <div className="container">
      <form action="">
        <input type="text" />
        <label>Search</label>
        <input type="text" />
        <label>Genres</label>
        <input type="text" />
        <label>Year</label>
        <input type="text" />
        <label>Season</label>
        <input type="text" />
        <label>Format</label>
        <input type="text" />
        <label>Airing Status</label>

        <button>
          Icon filter
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
