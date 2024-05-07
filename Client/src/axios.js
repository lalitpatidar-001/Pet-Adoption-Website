import axios from 'axios';

// https://api-pet-adoption.vercel.app/api
const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api', // Base URL for all requests
  headers: {
    'Content-Type': 'application/json',
  },
});

export const STATIC_PATH = "http://localhost:4000"

export default axiosInstance;