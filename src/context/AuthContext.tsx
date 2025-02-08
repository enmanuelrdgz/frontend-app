"use client"

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({isAuthenticated: false, signin: (token: string) => {}, signout: () => {}});

interface AuthProviderProps {
    children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Simula una función de login
  const signin = (token: string) => {
    sessionStorage.setItem('token', token);
    setIsAuthenticated(true);
  };

  // Simula una función de logout
  const signout = () => {
    sessionStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signin, signout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);