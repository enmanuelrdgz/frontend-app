import '@styles/globals.css';
import { ReactNode } from 'react';

export const metadata = {
    title: 'Poll System',
    description: 'A site to create quick polls.',
};

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <head>
                <meta charSet='utf-8'/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name='robots' content='index, follow'/>
                <meta name='theme-color' content='#373737'/>
                <link rel='icon' type='image/jpg' href="https://api.dicebear.com/9.x/bottts/svg?seed=Christian"/>
                {/* agregar metadatos opengraph */}
            </head>

            <body>
                {children}
            </body>
        </html>
    );
}
