// src/services/axiosInstance.js
import axios from 'axios';

// Create an Axios instance
const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL, // Uses .env for base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;

