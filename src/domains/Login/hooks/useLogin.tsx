import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthResponse } from '../../../models/LoginResponse';
import { ApiLogin } from '../utils/ApiLogin';

export const useLogin = () => {
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const login = async (email: string, password: string): Promise<void> => {
        try {
            setError(null);
            const response: AuthResponse = await ApiLogin(email, password);
            console.log(response);
            if (response.role === 'tenant') {
                navigate('/TenantHomePage');
            } else if (response.role === 'owner') {
                navigate('/OwnerHomePage');
            }
        } catch (error: any) {  // Capturer correctement l'erreur
            setError(error.message);
        }
    };

    return { login, error };
};
