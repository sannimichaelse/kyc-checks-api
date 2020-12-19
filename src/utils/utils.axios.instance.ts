import axios from 'axios';
import envConfig from '../config/index';

export const post = async (data: object) => {
  const url = envConfig.API_URL;
  return axios.post(url, data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${envConfig.API_KEY}`
    }
  });
};
