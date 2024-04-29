import axios from 'axios';

let baseURL = 'https://api.froggyfriends.io';

if (process.env.NEXT_PUBLIC_API_URL) {
  baseURL = process.env.NEXT_PUBLIC_API_URL;
}

export const instance = axios.create({
  baseURL
});

export default instance;