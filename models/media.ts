export interface Media {
  id: number;
  title: { romaji: string };
  coverImage: { large: string; color: string };
  startDate: { year: number, month: number, day: number };
  endDate: { year: number, month: number, day: number };
  season: string;
  type: string;
  format: string;
  status: string;
  episodes: number;
  duration: number;
  genres: string[];
  isAdult: boolean;
  averageScore: number;
  popularity: number;
  nextAiringEpisode: {
    airingAt: number;
    timeUntilAiring: number;
    episode: number;
  }
  studios: {
    edges: {
      node: {
        name: string;
      }
    }[]
  }
};
