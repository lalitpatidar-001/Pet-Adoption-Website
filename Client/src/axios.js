import axios from 'axios';

// https://api-pet-adoption.vercel.app/api

export const urlPath = import.meta.env.VITE_REACT_APP_ENV_MODE === "Development" ? "http://localhost:4000" : "https://api-pet-adoption-website.onrender.com/api"



const axiosInstance = axios.create({
  baseURL: urlPath + "/api", // Base URL for all requests
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: true
});

export const STATIC_PATH = import.meta.env.VITE_REACT_APP_ENV_MODE === "Development" ? "http://localhost:4000" : "https://api-pet-adoption-website.onrender.com"
+ "/"

export default axiosInstance;