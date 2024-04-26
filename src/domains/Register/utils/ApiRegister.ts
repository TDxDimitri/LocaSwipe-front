import axios from 'axios';
import { REGISTER_URL } from '../../../config/ApiUrls.js';
import { RegisterResponse } from '../../../models/RegisterResponse';

// Fonction pour enregistrer un utilisateur
export async function ApiRegister(userData: RegisterResponse): Promise<any> {
  try {
    const response = await axios.post<RegisterResponse>(REGISTER_URL, userData);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error.response?.data?.message || error);
    throw new Error('Erreur lors de l\'enregistrement de l\'utilisateur');
  }
}

