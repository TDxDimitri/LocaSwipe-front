import axios from 'axios';
import { REGISTER_URL } from '../../../config/ApiUrls.js';
import { RegisterResponse } from '../../../models/RegisterResponse';

// Fonction pour enregistrer un utilisateur
export async function ApiRegister(userData: any): Promise<any> {
    try {
        const response = await axios.post<RegisterResponse>(REGISTER_URL, { userData });
        return response.data;
    } catch (error) {
        console.log(userData)
        throw new Error('Erreur lors de l\'enregistrement de l\'utilisateur');
    }
}

// Autres fonctions liées à l'API d'enregistrement...