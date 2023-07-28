
import axios from "axios";

export const makeRequest = axios.create({
  // baseURL: "http://localhost:8800/api/",
  baseURL: "Removed to publish to github",
  withCredentials: true,
});