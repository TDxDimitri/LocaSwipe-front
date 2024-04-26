import { useState } from 'react';
import axios from 'axios';
import { REGISTER_URL } from '../../../config/ApiUrls';
import { RegisterResponse } from '../../../models/RegisterResponse';

export const useRegister = () => {
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);

    const register = async (userData: RegisterResponse) => {
        try {
            const response = await axios.post<RegisterResponse>(REGISTER_URL, userData);
            setSuccess(true);
            // Réinitialisez le formulaire ou effectuez d'autres actions ici si nécessaire
        } catch (err) {
            setError(err.response.data.message || 'Une erreur est survenue lors de l\'inscription.');
            setSuccess(false);
        }
    };

    return { register, error, success };
};
