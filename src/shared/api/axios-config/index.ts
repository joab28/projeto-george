import axios from 'axios';
import { errorInterceptor, responseInterceptor } from './interceptors';

const Api = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    Authorization: `Bearer ${localStorage.getItem('APP_ACCESS_TOKEN') || ''}`,
  }
});

Api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error),
);

export { Api };