import axios from "axios";

const API = axios.create({
  baseURL: "https://smartbill-backend-385q.onrender.com/api"
});

export default API;