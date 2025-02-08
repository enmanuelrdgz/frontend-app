"use client"

import Link from 'next/link';
import styles from '@/styles/HomeLayout.module.css'
import ProtectedRoute from '@/components/ProtectedRoute';
import { useAuth } from '@/context/AuthContext';

export default function HomeLayout({ children }: {children: React.ReactNode}) {

    const {signout} = useAuth();

    return (
        <ProtectedRoute>

                <aside className={styles.aside}>
                    <nav>
                        <ul className={styles.ul}>
                            <li>
                                <Link href="/home">
                                    <button className={styles.btn}>Home</button>
                                </Link>
                            </li>
                            
                            <li>
                                <Link href="/home/createPoll">
                                    <button className={styles.btn}>Create Poll</button>                               
                                </Link>
                            </li>
                                                    
                            <li>
                                <Link href="/">
                                <button className={styles.btn} onClick={signout}>Log Out</button>  
                                </Link> 
                            </li>
                        </ul>
                    </nav>
                </aside>

                    {children}
        </ProtectedRoute>
    );
}
