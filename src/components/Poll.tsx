"use client"

import calcultePercentage from "@/lib/calculatePercentage";
import { useState } from "react";
import axios from "axios";
import { PollData } from "@/lib/definitions";
import styles from "@/styles/PollComponent.module.css"
import Image from "next/image";

const Poll: React.FC<PollData> = ({id, title, user, options, total_votes, created_at}) => {

    //estado para almacenar el id de la opcion seleccionada
    const [setselectedOption, setSetselectedOption] = useState<number | null>(null);
    //estado para almacenar los datos de la encuesta
    const [pollData, setPollData] = useState<PollData>({id, title, user, options, total_votes, created_at})
    
    const handleOptionChange = (id: number) => {
        setSetselectedOption(id);
        
        const body = {
            option_id: id,
        }

        const headers = {
            "token": sessionStorage.getItem("token")
        }

        axios.post("http://ec2-3-145-177-192.us-east-2.compute.amazonaws.com:8080" + "/poll/vote", body, {headers: headers})
            .then(res => {
                setPollData(res.data.pollData as PollData)
            })
            .catch(err => alert(err.message));
      };

    return (
        <article className={styles.article}>
            <header className={styles.header}>
                <span>
                    <Image src={"https://api.dicebear.com/9.x/initials/svg?seed=" + user.nickname} alt="ProfilePicture" width={50} height={50} style={{borderRadius: "100px"}}/>
                    <address>{pollData.user.nickname}</address>
                </span>

                <small>{pollData.created_at}</small>
            </header>

            <section className={styles.title}>
                <strong>{pollData.title}</strong>
            </section>

            <section className={styles.optionsContainer}>
                <ul className={styles.ul}>
                    {
                        pollData.options.map((option) => (
                            <li key={option.id} className={styles.option}>
                                    <em className={styles.optionName}>{option.name}</em>
                                    <input type="radio" name={pollData.id.toString()} value={option.id} checked={setselectedOption === option.id} onChange={() => handleOptionChange(option.id)}/>
                                    <progress max={100} value={calcultePercentage(option.votes, pollData.total_votes).toFixed(0)}/>
                                    <small>{calcultePercentage(option.votes, pollData.total_votes).toFixed(0) + "%"}</small>
                            </li>
                        ))
                    }
                </ul>
            </section>

            <footer className={styles.footer}>
                <small>Total Votes: {pollData.total_votes}</small>
            </footer>
        </article>
    )
}

export default Poll;