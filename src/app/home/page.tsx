"use client"

import React from "react";
import styles from "../../styles/homePage.module.css"
import Link from "next/link";
import { useState, useEffect } from "react";
import { fetchSurveys, Survey } from "@/services/fetchSurveys";
import calcultePercentage from "@/utils/calculatePercentage";



// Componente principal
const PollApp: React.FC = () => {

  // Estado para controlar la carga de datos
  const [loading, setLoading] = useState<boolean>(true);
  // Estado para almacenar los datos obtenidos de la API
  const [data, setData] = useState<Survey[]>([]);
  // Estado para manejar posibles errores
  const [error, setError] = useState<string | null>(null);

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
    <div >
      {/* Header */}
      <header className={styles["header"]}>
        <Link href="/create" className={styles["link"]}>
          <button className={styles["btn-header"]}>New Poll</button>
        </Link>
        <Link href="/" className={styles["link"]}>
          <button className={styles["btn-header"]}>Log Out</button>
        </Link>
        <Link href="/edit" className={styles["link"]}>
          <button className={styles["btn-header"]}>Edit Profile</button>
        </Link>
      </header>

      <div className={styles["gap"]}></div>

      {/* Main */}
      <main className={styles["main"]}>
        
      {
          loading ?
          (
            <h1>Loading...</h1>
          ) 
          
          :
          
          error ? 

          ( 
            <>
              <h1>Something went wrong...</h1>
            </>
          )

          :

          data.length == 0 ?

          (
            <div>
              <h2>No Surveys</h2>
            </div>
          )

          :

          (
            <>
            <ul className={styles["poll-list"]}>
            {
              data.map((survey: Survey) => (
                  <li key={survey.id}>
                    <div className={styles["poll"]}>
                    {/* Poll Header */}
                    <section className={styles["poll-header"]}>
                      <img className={styles["profile-picture"]} alt="Profile" />
                      <p className={styles["username"]}>{survey.creator.nickname}</p>
                      <p className={styles["date"]}>{survey.created_at}</p>
                    </section>

                    <h2 className={styles["poll-title"]}>{survey.title}</h2>

                    {/* Poll Body */}
                    <section className={styles["poll-body"]}>
                      {survey.options.map((option, index) => (
                        <div className={styles["option"]} key={index}>
                          <input type="radio" name="option" />
                          <h3 className={styles["option-name"]}>{option.name}</h3>
                          <div className={styles["option-bar-container"]}>
                            <div
                              className={styles["option-bar"]}
                              style={{ width: `${calcultePercentage(option.votes, survey.total_votes - option.votes)}%` }}
                            ></div>
                          </div>
                          <div className={styles["option-percentage"]}>
                            <p>{calcultePercentage(option.votes, survey.total_votes - option.votes).toFixed(0)}%</p>
                          </div>
                        </div>
                      ))}
                    </section>

                    {/* Poll Footer */}
                    <section className={styles["poll-footer"]}>
                      <div className={styles["poll-total-votes"]}>
                        <p>Total Votes: {survey.total_votes}</p>
                      </div>
                    </section>
                  </div>
                  </li>
              ))
            }
            </ul>
            
            {/* Botón Load More */}
            <button className={styles["btn"]}>Load More</button>

            </>
          )

        }
        
      </main>
    </div>
  );
};

export default PollApp;
