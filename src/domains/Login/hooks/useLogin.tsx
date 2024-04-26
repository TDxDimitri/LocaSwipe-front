import { useState } from 'react';
import { ApiLogin } from '../utils/ApiLogin';

export const useLogin = () => {
    const [error, setError] = useState<string | null>(null);

    const login = async (email: string, password: string): Promise<void> => {
        try {
            setError(null);
            const response = await ApiLogin(email, password);
            console.log(response);
        } catch (error) {
            setError(error.message);
        }
    };

    return { login, error };
};
