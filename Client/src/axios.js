import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api-pet-adoption.vercel.app/api', // Base URL for all requests
  headers: {
    'Content-Type': 'application/json',
  },
});

export const STATIC_PATH = "https://api-pet-adoption.vercel.app/"

export default axiosInstance;