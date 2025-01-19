import React from 'react';
import styles from '../styles/registerPage.module.css';
import Link from 'next/link';

const LoginPage: React.FC = () => {
    return (
        <main className={styles["main"]}>
            <h1>Log In</h1>
            <form className={styles["register-form"]}>
                <input
                    className={styles["input"]}
                    type="text"
                    placeholder="Username"
                    aria-label="Username"
                />
                <input
                    className={styles["input"]}
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                />
                <Link href="/register">
                    <p className={styles["link"]}>Create a new account</p>
                </Link>
                <Link href="/home">
                    <button className={styles["btn"]} type="submit">
                        Log In
                    </button>
                </Link>
            </form>
        </main>
    );
};

export default LoginPage;