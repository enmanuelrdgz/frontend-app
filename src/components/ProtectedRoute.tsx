"use client"

import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import { ReactNode, useEffect } from 'react'; // Importa useEffect

interface ProtectedRouteProps {
    children: ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  // Usa useEffect para manejar la redirección
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/signin'); // Redirige a la página de login
    }
  }, [isAuthenticated, router]); // Dependencias: isAuthenticated y router

  // Si no está autenticado, no renderices el contenido
  if (!isAuthenticated) {
    return null; // Evita renderizar la página protegida
  }

  return children;
};

export default ProtectedRoute;