import { Media } from "./media";

export interface Category {
  trending: Media[];
  season: Media[];
  nextSeason: Media[];
  popular: Media[];
  top: Media[];
}