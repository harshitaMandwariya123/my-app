export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  original_title: string;
  original_language: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface MovieDetail {
  id: number;
  title: string;
  poster_path?: string;
  adult: boolean;
  overview: string;
  release_date: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface TVShow {
    id: number;
    name: string;
    overview: string;
    poster_path?: string;
    first_air_date: string;
    popularity: number;
    vote_count: number;
    vote_average: number;
}

export interface TVShowDetail {
  id: number;
  name: string;
  poster_path?: string;
  overview: string;
  first_air_date: string;
  popularity: number;
  vote_count: number;
  vote_average: number;
}
  