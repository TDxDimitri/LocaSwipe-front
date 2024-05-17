import React, { createContext, useState, useEffect } from 'react';
import { UserRole } from '../../../models/LoginResponse';

export type AuthContextProps = {
  isAuthenticated: boolean;
  userRole: UserRole | null;
  token: string | null;
  login: (token: string, role: UserRole) => void;
  logout: () => void;
  setUserRole: React.Dispatch<React.SetStateAction<UserRole | null>>;
};

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem('token') || null);

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [token]);

  const login = (token: string, role: UserRole | null) => {
    if (role !== null) {
      setToken(token);
      setIsAuthenticated(true);
      setUserRole(role);
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
    }
  };

  const logout = () => {
    setToken(null);
    setIsAuthenticated(false);
    setUserRole(null);
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  };

  const value: AuthContextProps = {
    isAuthenticated,
    userRole,
    token,
    login,
    logout,
    setUserRole,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
