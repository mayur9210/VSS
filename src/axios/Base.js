import axios from "axios";

// eslint-disable-next-line
let backendURL = process.env.VUE_APP_BACKEND_URL; //VUE_APP_BACKEND_URL is set from .env file during build

const HTTP = axios.create({
  baseURL: backendURL
});
export default HTTP;
