import axios from 'axios';
import { LOGIN_URL } from '../../../config/ApiUrls.js';
import { AuthResponse } from '../../../models/LoginResponse';

export const ApiLogin = async (email: string, password: string): Promise<AuthResponse> => {
  try {
    const response = await axios.post<AuthResponse>(LOGIN_URL, { email, password });
    return response.data;
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) as string;
    throw new Error(message);
  }
};

