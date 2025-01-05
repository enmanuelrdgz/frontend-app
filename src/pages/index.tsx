"use client"

import styles from '../styles/index.module.css'
import { fetchSurveys, Survey, Option, Creator } from "../services/fetchSurveys"
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import SurveyCard from '@/components/SurveyCard';


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
      <>
      <Header />
      <main className={styles["main"]}>
        {
          loading ?
          (
            <h1>Loading...</h1>
          ) 
          
          :
          
          error ? 

          ( 
            <div>
              <h1>Error</h1>
            </div>
          )

          :

          data.length == 0 ?

          (
            <div>
              <h2>No Surveys :(</h2>
            </div>
          )

          :

          (
            <ul>
            {
              data.map((survey: Survey) => (
                  <li key={survey.id}>
                    <SurveyCard title={survey.title} options={survey.options} />
                  </li>
              ))
            }
            </ul>
          )

        }

      </main>
      </>
  );
}
