import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
    const { user } = AuthProvider();

    return (
        <Route
            {...rest}
            render={(props) =>
                user ? (
                    <Component {...props} />
                ) : (
                    <Navigate to="/login" />
                )
            }
        />
    );
};

export default AuthenticatedRoute;
