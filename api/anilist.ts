import { gql } from "graphql-tag";

const fragmentMedia = `
fragment media on Media {
  id
  title {
    romaji
  }
  coverImage {
    large
    color
  }
  startDate {
    year
    month
    day
  }
  endDate {
    year
    month
    day
  }
  season
  type
  format
  status (version:2)
  episodes
  duration
  chapters
  genres
  isAdult
  averageScore
  popularity
  nextAiringEpisode {
    airingAt
    timeUntilAiring
    episode
  }
  studios (isMain:true) {
    edges {
      isMain
      node {
        id
        name
      }
    }
  }
}
`;

export const endpoint = "https://graphql.anilist.co";

// Here we define our query as a multi-line string
// Storing it in a separate .graphql/.gql file is also possible
export const getMedias = gql`
query ($season:MediaSeason,$seasonYear:Int $nextSeason:MediaSeason,$nextYear:Int) {
  trending:Page (page:1,perPage:6) {
    media (sort:TRENDING_DESC,type:ANIME,isAdult:false) {
      ...media
    }
  }
  season:Page (page:1,perPage:6) {
    media (season:$season,seasonYear:$seasonYear,sort:POPULARITY_DESC,type:ANIME,isAdult:false) {
      ...media
    }
  }
  nextSeason:Page (page:1,perPage:6) {
    media (season:$nextSeason,seasonYear:$nextYear,sort:POPULARITY_DESC,type:ANIME,isAdult:false) {
      ...media
    }
  }
  popular:Page (page:1,perPage:6) {
    media (sort:POPULARITY_DESC,type:ANIME,isAdult:false) {
      ...media
    }
  }
  top:Page (page:1,perPage:10) {
    media (sort:SCORE_DESC,type:ANIME,isAdult:false) {
      ...media
    }
  }
}
${fragmentMedia}
`;

export const getMediaWithFilter = gql`
query ($search:String, $genres: [String], $tags: [String]) {
  filtered:Page (page:1,perPage:10) {
    media (search: $search, type: ANIME, genre_in: $genres, tag_in: $tags) {
      ...media
    }
  }
}
${fragmentMedia}
`;

export const getGenres = gql`
  query {
    GenreCollection
    MediaTagCollection {
      name
    }
  }
`;
