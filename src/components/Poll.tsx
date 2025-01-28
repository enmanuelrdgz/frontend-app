"use client"

import calcultePercentage from "@/utils/calculatePercentage";
import { useState } from "react";
import axios from "axios";
import { PollData } from "@/types/Poll";

const Poll: React.FC<PollData> = ({id, title, user, options, votes, created_at}) => {

    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [pollData, setPollData] = useState<PollData>({id, title, user, options, votes, created_at})

    const handleOptionChange = (id: number) => {
        setSelectedOption(id); // Actualiza el estado para reflejar la opción seleccionada
    
        try {
          const response = axios.post(process.env.NEXT_PUBLIC_API_URL + "/api/survey/" + pollData.id.toString() + "/" + id.toString(), {token: localStorage.getItem("token")});
          response.then((response) => {
            setPollData(response.data as PollData)
          })
        } catch (error) {
          console.error("Error al enviar la solicitud:", error);
        }
      };

    return (
        <article>
            <header>
                <address>{pollData.user.nickname}</address>
                <img src={user.image} alt="ProfilePicture" />
                <small>{pollData.created_at}</small>
            </header>

            <section>
                <strong>{pollData.title}</strong>
            </section>

            <section>
                <form>
                    <ul>
                        {pollData.options.map((option, index) => (
                        <li key={option.id}>
                                <em>{option.name}</em>
                                <progress max={100} value={calcultePercentage(option.votes, pollData.votes).toFixed(0)}/>
                                <input type="radio" name={pollData.id.toString()} value={option.id} checked={selectedOption === option.id} onChange={() => handleOptionChange(option.id)}/>
                        </li>
                        ))}
                    </ul>
                </form>
            </section>

            <footer >
                <small>Total Votes: {pollData.votes}</small>
            </footer>
        </article>
    )
}

export default Poll;