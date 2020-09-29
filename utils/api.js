import Axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const api = Axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default api;
