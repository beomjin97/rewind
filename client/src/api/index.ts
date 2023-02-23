import axios from "axios";

const devURL = "http://localhost:5001";
const prodURL = "http://13.112.212.213";

const API = axios.create({ baseURL: devURL });

export default API;
