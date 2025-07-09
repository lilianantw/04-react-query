// Интерфейс для одного фильма

export interface Movie {
  id: number;
  poster_path: string;
  backdrop_path: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

// Интерфейс для ответа от API TMDB при поиске фильмов
export interface MoviesResponse {
  results: Movie[];
  total_pages: number;
}
