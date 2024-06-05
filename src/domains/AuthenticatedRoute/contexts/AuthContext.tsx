import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { UserRole } from '../../../models/LoginResponse';

export type AuthContextProps = {
  isAuthenticated: boolean;
  userRole: UserRole | null;
  token: string | null;
  userId: number | null;
  login: (token: string, role: UserRole, userId: number) => void;
  logout: () => void;
  setUserRole: React.Dispatch<React.SetStateAction<UserRole | null>>;
};

export const AuthContext = createContext<AuthContextProps | null>(null);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [userId, setUserId] = useState<number | null>(localStorage.getItem('userId') ? parseInt(localStorage.getItem('userId')!) : null);

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [token]);

  const login = (token: string, role: UserRole, userId: number) => {
    if (token && role && userId !== undefined) {
      setToken(token);
      setIsAuthenticated(true);
      setUserRole(role);
      setUserId(userId);
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      localStorage.setItem('userId', userId.toString());
    } else {
      console.error('Invalid login parameters:', { token, role, userId });
    }
  };

  const logout = () => {
    setToken(null);
    setIsAuthenticated(false);
    setUserRole(null);
    setUserId(null);
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('userId');
  };

  const value: AuthContextProps = {
    isAuthenticated,
    userRole,
    token,
    userId,
    login,
    logout,
    setUserRole,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
