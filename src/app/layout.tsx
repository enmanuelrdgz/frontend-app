import './globals.css';
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
                <meta name="viewport" content='width="device-width"'/>
                <meta name='robots' content='index, follow'/>
                <meta name='theme-color' content='#373737'/>
                <link rel='icon' type='image/jpg' href="https://api.dicebear.com/9.x/bottts/svg?seed=Christian"/>
                {/* agregar metadatos opengraph */}
            </head>

            <body>
                <header>
                    <nav>
                        <ul>
                            {/* sobre que es esta pagina*/}
                            <li>About</li>
                            {/* explicar la estructura del sistema */}
                            <li>Documentation</li>
                            {/* para contactarse conmigo */}
                            <li>Contact</li>
                        </ul>
                    </nav>
                </header>
                
                {children}
            </body>
        </html>
    );
}
