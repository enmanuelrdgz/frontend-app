// app/register/page.tsx
import React from 'react';
import styles from '../../styles/registerPage.module.css';
import Link from 'next/link';

const RegisterPage: React.FC = () => {
    return (
        <main className={styles["register-page"]}>
            <h1>Create a new account</h1>
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
                <Link href="/">
                    <p className={styles["link"]}>Log In</p>
                </Link>
                <Link href="/home">
                    <button className={styles["btn"]} type="submit">
                        Register
                    </button>
                </Link>
            </form>
        </main>
    );
};

export default RegisterPage;