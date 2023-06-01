import axios from 'axios';
const baseURL = 'https://deeplookingproject.com/api';
// const baseURL = 'http://192.168.179.24:4000';

export const client = axios.create({
  baseURL,
});
