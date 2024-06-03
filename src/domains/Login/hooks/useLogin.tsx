import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext, AuthContextProps } from '../../AuthenticatedRoute/contexts/AuthContext';
import { ApiLogin } from '../utils/ApiLogin';
import { AuthResponse } from '../../../models/LoginResponse';

export const useLogin = () => {
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const authContext = useContext(AuthContext) as AuthContextProps;
    const { login } = authContext;

    const loginApi = async (email: string, password: string): Promise<void> => {
        try {
            setError(null);
            const response: AuthResponse = await ApiLogin(email, password);
            if (response && response.token && response.role && response.id !== undefined) {
                login(response.token, response.role, response.id);
                if (response.role === 'tenant') {
                    navigate('/tenant');
                } else if (response.role === 'owner') {
                    navigate('/owner');
                }
            } else {
                throw new Error('Invalid response from API');
            }
        } catch (error: any) {
            setError(error.message);
        }
    };

    return { loginApi, error };
};
