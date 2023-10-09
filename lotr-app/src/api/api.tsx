import axios from "axios";

const APITOKEN = process.env.REACT_APP_API_TOKEN;
const APIURL = process.env.REACT_APP_API_URL;

const LOTRApi = axios.create({
  baseURL: APIURL,
});

LOTRApi.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${APITOKEN}`;
  return config;
});

export default LOTRApi;
