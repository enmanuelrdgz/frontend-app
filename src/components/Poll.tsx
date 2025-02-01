"use client"

import calcultePercentage from "@/lib/calculatePercentage";
import { useState } from "react";
import axios from "axios";
import { PollData } from "@/lib/definitions";

const Poll: React.FC<PollData> = ({id, title, user, options, votes, created_at}) => {

    //estado para almacenar el id de la opcion seleccionada
    const [setselectedOption, setSetselectedOption] = useState<number | null>(null);
    //estado para almacenar los datos de la encuesta
    const [pollData, setPollData] = useState<PollData>({id, title, user, options, votes, created_at})

    const handleOptionChange = (id: number) => {
        setSetselectedOption(id);
        const body = {
            token: localStorage.getItem("token")
        }
        axios.post(process.env.NEXT_PUBLIC_API_URL + "/poll/vote/" + id.toString(), body)
            .then(res => setPollData(res.data as PollData))
            .catch(err => alert(err.message));
      };

    return (
        <article>
            <header>
                <address>{pollData.user.nickname}</address>
                <img src={pollData.user.image} alt="ProfilePicture" />
                <small>{pollData.created_at}</small>
            </header>

            <section>
                <strong>{pollData.title}</strong>
            </section>

            <section>
                <ul>
                    {pollData.options.map((option) => (
                    <li key={option.id}>
                            <em>{option.name}</em>
                            <progress max={100} value={calcultePercentage(option.votes, pollData.votes).toFixed(0)}/>
                            <input type="radio" name={pollData.id.toString()} value={option.id} checked={setselectedOption === option.id} onChange={() => handleOptionChange(option.id)}/>
                    </li>
                    ))}
                </ul>
            </section>

            <footer >
                <small>Total Votes: {pollData.votes}</small>
            </footer>
        </article>
    )
}

export default Poll;