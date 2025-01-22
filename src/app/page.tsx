"use client"

import React, { useState, ChangeEvent, MouseEvent } from 'react';
import styles from '../styles/registerPage.module.css';
import Link from 'next/link';
import axios, { Axios, AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';

const LoginPage: React.FC = () => {

    const router = useRouter();

    const [username, setUsername] = useState<String>("");
    const [password, setPassword] = useState<String>("");

    // funciones para actualizar el estado

    function updateUsername(e : ChangeEvent<HTMLInputElement>) {
        setUsername(e.target.value);
    }

    function updatePassword(e : ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value)
    }

    // funcion para enviar los datos al servidor

    function sendData(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        
        const data = {
            nickname: username,
            password: password
        }

        axios.post(process.env.NEXT_PUBLIC_API_URL + "/api/auth/login", data)
        .then((response: AxiosResponse) => {
            localStorage.setItem("token", response.data.token)
            //autenticar
            router.push('/home');
        })
        .catch((e: AxiosError) => {
            alert(e)
        }) 
    }

    return (
        <main className={styles["main"]}>
            <h1>Log In</h1>
            <form className={styles["register-form"]}>
                <input
                    className={styles["input"]}
                    type="text"
                    placeholder="Username"
                    aria-label="Username"
                    onChange={updateUsername}
                />
                <input
                    className={styles["input"]}
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                    onChange={updatePassword}
                />
                <Link href="/register">
                    <p className={styles["link"]}>Create a new account</p>
                </Link>
                <button className={styles["btn"]} type="submit" onClick={sendData}>
                    Log In
                </button>
            </form>
        </main>
    );
};

export default LoginPage;