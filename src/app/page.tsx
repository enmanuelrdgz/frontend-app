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
            localStorage.setItem("id", response.data.id)
            //autenticar
            router.push('/home');
        })
        .catch((e: AxiosError) => {
            alert(e)
        }) 
    }

    return (
        <main className={styles["main"]}>
            <section>
                <h1>Welcome to Quick Polls!</h1>
                <p>
                    This platform allows users to create, share, and participate in polls, providing a seamless and interactive experience.
                </p>
            </section>
            
            <section>
                <button>Log In</button>

                <dialog>
                    <form className={styles["register-form"]}>
                        <h2>Log In</h2>

                        <fieldset>
                            <legend>Enter your nickname and password</legend>

                            <label>Nickname:
                                <input
                                    className={styles["input"]}
                                    type="text"
                                    aria-label="Nickname"
                                    onChange={updateUsername}
                                    required
                                />
                            </label>
                            
                            <label>Password:
                                <input
                                    className={styles["input"]}
                                    type="password"
                                    minLength={8}
                                    aria-label="Password"
                                    onChange={updatePassword}
                                    required
                                />
                            </label>

                            <button className={styles["btn"]} type="submit">
                                Send
                            </button>
                        </fieldset>

                        <strong>Mensaje dinamico devuelto por la api</strong>
                    </form>       
                </dialog>
            </section>

            <section>
                <button>Sign Up</button>    

                <dialog>
                    <form className={styles["register-form"]}>
                        <h2>Sign Up</h2>

                        <fieldset>
                            <legend>Enter a new nickname and password</legend>

                            <small>The password must be at least 8 characters long</small>

                            <label>Nickname:
                                <input
                                    className={styles["input"]}
                                    type="text"
                                    aria-label="Nickname"
                                    onChange={updateUsername}
                                    required
                                />
                            </label>
                            
                            <label>Password:
                                <input
                                    className={styles["input"]}
                                    type="password"
                                    minLength={8}
                                    aria-label="Password"
                                    onChange={updatePassword}
                                    required
                                />
                            </label>

                            <button className={styles["btn"]} type="submit">
                                Send
                            </button>
                        </fieldset>

                        <strong>Mensaje dinamico devuelto por la api</strong>  
                    </form>       
                </dialog>
            </section>
        </main>
    );
};

export default LoginPage;