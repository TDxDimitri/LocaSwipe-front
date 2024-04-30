import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext, AuthContextProps } from './contexts/AuthContext';
import { UserRole } from '../../models/LoginResponse';

interface Props {
    children: React.ReactNode;
    allowedRoles: string[];
}

const AuthenticatedRoute = ({ children, allowedRoles }: Props) => {
    const authContext = useContext(AuthContext) as AuthContextProps;
    const { isAuthenticated, setUserRole } = authContext;
    const location = useLocation();
    const [checkToken, setCheckToken] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role');
        if (token && role) {
            authContext.login(token, role as UserRole);
            if (role !== null) {
                setUserRole(role as UserRole);
            }
        }
        setCheckToken(true);
    }, []);

    if (!checkToken) {
        return null;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (authContext.userRole && allowedRoles.includes(authContext.userRole)) {
        return children;
    }

    // Afficher un message d'erreur ou rediriger vers une page d'erreur appropriée
    return (
        <div>
            <h1>Accès refusé</h1>
            <p>Vous n'avez pas les autorisations nécessaires pour accéder à cette page.</p>
        </div>
    );
};

export default AuthenticatedRoute;
