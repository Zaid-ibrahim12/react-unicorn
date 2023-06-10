import axios from "axios";
import { baseURL } from "../constant/configEndpoints";

const api = axios.create({
  baseURL: baseURL,
  timeout: 200000,
  headers: {
    Accept: "application/json",
  },
});

console.log("configration axios done");

export { api };
