import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dashboardbackend.akashjayaraj.repl.co/",
  timeout: 5000,
  headers: { "X-Custom-Header": "foobar" },
});

export default axiosInstance;
