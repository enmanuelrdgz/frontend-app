"use client"

import styles from '../styles/HomeStyles.module.css'
import { AuthProvider } from "../context/AuthContext"; 
import { fetchSurveys, Survey, Option, Creator } from "../services/fetchSurveys"
import { useState, useEffect } from 'react';


export default function Home() {
    // Estado para controlar la carga de datos
    const [loading, setLoading] = useState<boolean>(true);
    // Estado para almacenar los datos obtenidos de la API
    const [data, setData] = useState<Survey[]>([]);
    // Estado para manejar posibles errores
    const [error, setError] = useState<string | null>(null);

  const surveysPromise = fetchSurveys();

  useEffect(() => {
    // Función asincrónica que realiza la solicitud a la API
    const fetchData = async () => {
        // Hacemos la solicitud GET a la API
        const response = fetchSurveys();
        // Actualizamos el estado con los datos obtenidos
        response
        .then((surveys) => {
          setData(surveys);
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
    

    

  return (
    <AuthProvider>
    <div>

      <main>
        {
          loading ?
          (
            <h1>Loading...</h1>
          ) 
          
          :
          
          error ? 

          (
            <h1>Error...</h1>
          )

          :

          (
            <ul>
            {
              data.map((survey: Survey) => (
                  <li key={survey.id}>
                    <div className={styles["survey-container"]}>
                      <div className={styles["title-container"]}>
                        <h2 className={styles["title"]}>{survey.title}</h2>
                      </div>
                      <div className={styles["option-container"]}>
                        <ul>
                        {
                          survey.options.map((option) => (
                            <li key={option.id}>
                              <div className={styles["option"]}>
                                <span className={styles["option-name"]}>{option.name}</span>
                                <span className={styles["votes"]}>Votes: <span className='vote-count'>{option.votes}</span></span>
                              </div>
                            </li>
                          ))
                        }
                        </ul>
                      </div>
                    </div>
                  </li>
              ))
            }
            </ul>
          )

        }

      </main>
    </div>
    </AuthProvider>
  );
}
