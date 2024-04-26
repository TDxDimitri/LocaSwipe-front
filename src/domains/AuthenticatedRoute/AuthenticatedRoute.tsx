import React, { PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

interface AuthenticatedRouteProps extends PropsWithChildren { }

const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = ({ children }) => {
    const { user } = useAuth();
    const location = useLocation();

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <>{children}</>;
};

export default AuthenticatedRoute;
