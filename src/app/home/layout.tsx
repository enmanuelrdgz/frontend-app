import Link from 'next/link';
import styles from '@/styles/HomeLayout.module.css'

export default function HomeLayout({ children }: {children: React.ReactNode}) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.gap}/>

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
                            <button className={styles.btn}>Log Out</button>  
                            </Link> 
                        </li>
                    </ul>
                </nav>
            </aside>

            <div className={styles.mainContent}>
                {children}
            </div>
        </div>
    );
}
