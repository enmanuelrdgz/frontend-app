import React, { useSyncExternalStore } from "react";
import calcultePercentage from "@/utils/calculatePercentage";
import styles from "../styles/homePage.module.css"
import { useState } from "react";
import axios from "axios";
import { Survey } from "@/services/fetchSurveys";


const Poll: React.FC<Survey> = ({id, title, creator, options, total_votes, created_at}) => {

    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [pollData, setPollData] = useState<Survey>({id, title, creator, options, total_votes, created_at})

    const handleOptionChange = (id: number) => {
        setSelectedOption(id); // Actualiza el estado para reflejar la opción seleccionada
    
        try {
          const response = axios.post(process.env.NEXT_PUBLIC_API_URL + "/api/survey/" + pollData.id.toString() + "/" + id.toString(), {token: localStorage.getItem("token")});
          response.then((response) => {
            setPollData(response.data as Survey)
          })
        } catch (error) {
          console.error("Error al enviar la solicitud:", error);
        }
      };

    return (
        <article className={styles["poll"]}>
            {/* Poll Header */}
            <header className={styles["poll-header"]}>
                <img className={styles["profile-picture"]} alt="Profile" />
                <address className={styles["username"]}>{pollData.creator.nickname}</address>
                <em className={styles["date"]}>{pollData.created_at}</em>
            </header>

            <h2 className={styles["poll-title"]}>{pollData.title}</h2>

            {/* Poll Body */}
            <section className={styles["poll-body"]}>
                {pollData.options.map((option, index) => (
                <div className={styles["option"]} key={index}>
                    <input type="radio" name={pollData.id.toString()} value={option.id} checked={selectedOption === option.id} onChange={() => handleOptionChange(option.id)}/>
                    <h3 className={styles["option-name"]}>{option.name}</h3>
                    <div className={styles["option-bar-container"]}>
                    <div
                        className={styles["option-bar"]}
                        style={{ width: `${calcultePercentage(option.votes, pollData.total_votes)}%` }}
                    ></div>
                    </div>
                    <div className={styles["option-percentage"]}>
                    <p>{calcultePercentage(option.votes, pollData.total_votes).toFixed(0)}%</p>
                    </div>
                </div>
                ))}
            </section>

            {/* Poll Footer */}
            <footer className={styles["poll-footer"]}>
                <div className={styles["poll-total-votes"]}>
                <em>Total Votes: {pollData.total_votes}</em>
                </div>
            </footer>
        </article>
    )
}

export default Poll;