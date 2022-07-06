import http from "./httpService";
import { apiUrl } from "../assets/config.json";

const apiEndpoint = apiUrl + "/movies";

export function getMovies() {
  return http.get(apiEndpoint);
}
