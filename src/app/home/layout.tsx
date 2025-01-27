
      import './globals.css';
      import { ReactNode } from 'react';
      import Link from 'next/link';
      
      export const metadata = {
          title: 'Poll System',
          description: 'A site to create quick polls.',
      };
      
      interface RootLayoutProps {
          children: ReactNode;
      }
      
      export default function RootLayout({ children }: RootLayoutProps) {
          return (
            <>
                <aside>
                    <Link href="/create">
                    <button>Home</button>
                    </Link>

                    <Link href="/create">
                    <button>Create Poll</button>
                    </Link>

                    <Link href="/create">
                    <button>My Polls</button>
                    </Link>

                    <Link href="/edit">
                    <button>Edit Profile</button>
                    </Link>

                    <Link href="/">
                    <button>Log Out</button>
                    </Link>       
                </aside>

                {children}
            </>
            
    
          );
      }
      