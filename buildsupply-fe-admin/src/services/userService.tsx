import axios from '../config/axios';
import { User } from '../types/user';

export const getCurrentUser = (): Promise<User> => {
  return axios.get('/user/me').then(res => res.data);
};
