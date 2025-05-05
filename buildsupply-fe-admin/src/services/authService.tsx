// src/services/authService.ts
import axios from 'axios';

export const refreshToken = async (refreshToken: string): Promise<{ accessToken: string }> => {
  const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/refresh`, {
    refreshToken,
  });
  return response.data;
};
