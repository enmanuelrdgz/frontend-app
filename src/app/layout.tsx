import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
    title: 'Poll System',
    description: 'A generic poll system',
};

interface RootLayoutProps {
    children: ReactNode; // Especifica que `children` debe ser un nodo de React
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
