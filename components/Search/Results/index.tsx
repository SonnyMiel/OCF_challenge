import Card from './Card';
import styles from './index.module.scss';

export interface SearchResultsProps {
  category?: string;
  limit?: number;
  detailed?: boolean;
}

export const SearchResults: React.FC<SearchResultsProps>  = (props: SearchResultsProps) => {
  return (
    <Card />
  );
};

export default SearchResults;
