import http from "./httpService";
import { apiUrl } from "../assets/config.json";

export function getDisciplines() {
  return http.get(apiUrl + "/genres");
}
