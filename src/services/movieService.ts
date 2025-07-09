import axios from "axios";
import type { MoviesResponse } from "../types/movie";

// Интерфейс для ответа от API TMDB при поиске фильмов
export interface MoviesResponse {
  results: Movie[];
  total_pages: number;
}

const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (
  query: string,
  page: number = 1
): Promise<MoviesResponse> => {
  const { data } = await axios.get<MoviesResponse>(`${BASE_URL}/search/movie`, {
    params: {
      query,
      page,
      language: "en-US",
      include_adult: false,
    },
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  });

  return data;
};
