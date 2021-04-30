import { Media } from "./media";

export interface Category {
  trending: {
    media: Media[]
  };
  filtered?: {
    media: Media[]
  };
  season: {
    media: Media[]
  };
  nextSeason: {
    media: Media[]
  };
  popular: {
    media: Media[]
  };
  top: {
    media: Media[]
  };
}