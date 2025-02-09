"use client"

import { createContext, ReactNode, useContext, useState } from 'react';

type AuthContextType = {
  isAuthenticated: boolean;
  signin: (token: string) => void;
  signout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

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

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used inside AuthProvider');
  }
  return context;
};