import { useEffect } from "react";

import { Media } from "models/media";

import Card from "./Card/card";
import InlineCard from "./InlineCard/inlineCard";

import styles from "./searchResults.module.scss";

export interface SearchResultsProps {
  medias: Media[];
  isInline?: boolean;
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  medias,
  isInline,
}: SearchResultsProps) => {
  return !medias ? null : (
    <div className={`${styles["results__container"]} ${isInline ? styles["results__container-inline"] : ''}`}>
      {medias?.map((media, index) =>
        isInline ? (
          <InlineCard media={media} key={media.id} rank={index} />
        ) : (
          <Card media={media} key={media.id} isRight={index < 3} />
        )
      )}
    </div>
  );
};

export default SearchResults;
