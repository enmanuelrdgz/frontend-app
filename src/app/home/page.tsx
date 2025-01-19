"use client"

import React from "react";
import styles from "../../styles/homePage.module.css"
import Link from "next/link";

// Interfaz para los datos de una opción de encuesta
interface Option {
  name: string;
  percentage: number;
}

// Componente principal
const PollApp: React.FC = () => {
  const options: Option[] = [
    { name: "Option 1", percentage: 10 },
    { name: "Option 2", percentage: 25 },
    { name: "Option 3", percentage: 65 },
  ];

  return (
    <div>
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
        {/* Encuesta */}
        <ul>

        <div className={styles["poll"]}>
          {/* Poll Header */}
          <section className={styles["poll-header"]}>
            <img className={styles["profile-picture"]} alt="Profile" />
            <p className={styles["username"]}>user11235</p>
            <p className={styles["date"]}>5 min ago</p>
          </section>

          {/* Poll Body */}
          <section className={styles["poll-body"]}>
            {options.map((option, index) => (
              <div className={styles["option"]} key={index}>
                <input type="radio" name="option" />
                <h3 className={styles["option-name"]}>{option.name}</h3>
                <div className={styles["option-bar-container"]}>
                  <div
                    className={styles["option-bar"]}
                    style={{ width: `${option.percentage}%` }}
                  ></div>
                </div>
                <div className={styles["option-percentage"]}>
                  <p>{option.percentage}%</p>
                </div>
              </div>
            ))}
          </section>

          {/* Poll Footer */}
          <section className={styles["poll-footer"]}>
            <div className={styles["poll-total-votes"]}>
              <p>Total Votes: 325</p>
            </div>
          </section>
        </div>

        </ul>
        

        {/* Botón Load More */}
        <button className={styles["btn"]}>Load More</button>
      </main>
    </div>
  );
};

export default PollApp;
