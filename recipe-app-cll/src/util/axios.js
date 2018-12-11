import axios from "axios";
import env from "./env";

const instance = axios.create({
  baseURL: env.databaseURL
});

export default instance;
