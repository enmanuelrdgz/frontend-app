// app/layout.tsx
import '../styles/globals.css';
import { ReactNode } from 'react';

export const metadata = {
    title: 'Mi Aplicación',
    description: 'Descripción de mi aplicación',
};

interface RootLayoutProps {
    children: ReactNode; // Especifica que `children` debe ser un nodo de React
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="es">
            <body>{children}</body>
        </html>
    );
}
