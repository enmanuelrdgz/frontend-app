"use client"

import '../styles/styles.css'
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
                    <div className='survey-container'>
                      <div className='title-container'>
                        <h2 className='title'>{survey.title}</h2>
                      </div>
                      <div className='options-container'>
                        {
                          survey.options.map((option) => (
                            <li key={option.id}>
                              <div className='option-container'>
                                <span className='option-name'>{option.name}</span>
                                <span className='option-votes'>{option.votes}</span>
                              </div>
                            </li>
                          ))
                        }
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
