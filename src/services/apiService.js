import { apiUrl } from "../assets/config.json";
import axios from "axios";

export function getDisciplines() {
  return axios.get(apiUrl + "/genres");
}

export function getPractices() {
  return axios.get(apiUrl + "/movies");
}
