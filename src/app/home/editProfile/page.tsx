"use client"

import React from 'react';
import styles from "../../styles/editProfilePage.module.css"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { User, fetchUser } from '@/services/fetchUser';
import axios from 'axios';

const EditProfilePage: React.FC = () => {

    // Estado para controlar la carga de datos
    const [loading, setLoading] = useState<boolean>(true);
    //Estado para almacenar el nickname
    const [nickname, setNickname] = useState<string>("")
    //Estado para almacenar la password
    const [password, setPassword] = useState<string>("")
    // Estado para manejar posibles errores
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      // Función asincrónica que realiza la solicitud a la API
      const fetchData = async () => {
          // Hacemos la solicitud GET a la API
          const response = fetchUser();
          // Actualizamos el estado con los datos obtenidos
          response
          .then((user) => {
            setNickname(user.nickname)
            setPassword(user.password)        

          })
          .catch((error) => {
            setError(error)
          })
          .finally(() => {
            // Siempre que la solicitud termine, actualizamos el estado de carga
            setLoading(false);
          })
        }
        // Llamamos a la función fetchData para hacer la solicitud
      fetchData();
    }, []); // El array vacío asegura que se ejecute solo una vez al montar el componente

    // Manejar el envío del formulario
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Validar el formulario
    if (!nickname.trim()) {
      alert("El nickname no puede estar vacío.");
      return;
    }
    if (!password) {
      alert("La contrasena no puede ser vacia");
      return;
    }

    // Procesar la encuesta (puedes enviarla a una API aquí)
    const requestBody = {
        nickname: nickname,
        password: password,
        image: null,
        token: localStorage.getItem("token")
    }

    axios.post(process.env.NEXT_PUBLIC_API_URL + "/api/user/edit", requestBody)
    .then((response) => {
        localStorage.setItem("token", response.data.token)
        alert("User edited succesfully!");
    })
    .catch(err => {
        console.log(err.message);
        alert("Something went wrong...");
    })
  };

    // Manejar el cambio de nickname
    const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setNickname(event.target.value);
    };

    // Manejar el cambio de password
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
      };

    return (
        <main className={styles["layout"]}>
            <h1>Edit Profile</h1>

            <form>
                <label>Username
                    <input
                        className={styles["input"]}
                        type="text"
                        placeholder="username"
                        onChange={handleNicknameChange}
                        value={nickname}
                    />
                </label>
            
                <label htmlFor="password">Password
                    <input
                        id="password"
                        className={styles["input"]}
                        type="password"
                        placeholder="password"
                        onChange={handlePasswordChange}
                        value={password}
                    />
                </label>
            

            {/* Profile Picture */}
            <img
                className={styles["profile-picture"]}
                src="/placeholder-profile.png" // Cambia esta ruta si tienes una imagen por defecto
                alt="Profile"
            />

            <button className={styles["btn-upload"]}>Upload Image</button>
            <input className={styles["upload-image"]} type='image'/>

            {/* Buttons */}
            <button className={styles["btn"]} type="submit" onClick={handleSubmit}>
                Save
            </button>
            
            <Link href="/home">
                <button className={styles["btn"]}>
                    Go Back
                </button>
            </Link>
            </form>

                
        </main>
    );
};

export default EditProfilePage;
