"use client"

// app/register/page.tsx
import styles from '../../styles/registerPage.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, ChangeEvent, MouseEvent } from 'react';
import axios, { Axios, AxiosError, AxiosResponse } from 'axios';


const RegisterPage: React.FC = () => {

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

        axios.post(process.env.NEXT_PUBLIC_API_URL + "/api/auth/register", data)
        .then((response: AxiosResponse) => {
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("id", response.data.id)
            //autenticar
            router.push('/home');
        })
        .catch((e: AxiosError) => {
            alert(e)
        }) 
    }

    return (
        <main className={styles["register-page"]}>
            <h1>Create a new account</h1>
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
                <Link href="/">
                    <p className={styles["link"]}>Log In</p>
                </Link>
                <Link href="/home">
                    <button className={styles["btn"]} type="submit" onClick={sendData}>
                        Register
                    </button>
                </Link>
            </form>
        </main>
    );
};

export default RegisterPage;