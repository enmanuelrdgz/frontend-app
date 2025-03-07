import styles from '@/styles/IndexPage.module.css'
import Link from 'next/link';

const IndexPage: React.FC = () => {

    return (
        <main className={styles.main}>
            <Link href="/signin">
                <button className={styles.btn}>
                    Log In
                </button>
            </Link>
            
            <Link href="/signup">
                <button className={styles.btn}>
                    Sign Up
                </button>
            </Link>
        </main>
    );
};

export default IndexPage;