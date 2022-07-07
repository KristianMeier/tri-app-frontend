import http from "./httpService";
import { apiUrl } from "../assets/config.json";

export function getGenres() {
  return http.get(apiUrl + "/genres");
}
