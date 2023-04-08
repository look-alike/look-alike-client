import axios from 'axios';
const baseURL = 'http://127.0.0.1:4000';

export const client = axios.create({
  baseURL,
});
