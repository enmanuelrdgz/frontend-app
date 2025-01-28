"use client"

import calcultePercentage from "@/utils/calculatePercentage";
import { useState } from "react";
import axios from "axios";
import { PollData } from "@/types/Poll";

const Poll: React.FC<PollData> = ({id, title, user, options, votes, created_at}) => {

    const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);
    const [pollData, setPollData] = useState<PollData>({id, title, user, options, votes, created_at})

    const handleOptionChange = (id: number) => {
        setSelectedOptionId(id); // Actualiza el estado para reflejar la opción seleccionada    
        axios.post(process.env.NEXT_PUBLIC_API_URL + "/api/survey/" + pollData.id.toString() + "/" + id.toString(), {token: localStorage.getItem("token")})
            .then(res => setPollData(res.data as PollData))
            .catch();
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
                <ul>
                    {pollData.options.map((option, index) => (
                    <li key={option.id}>
                            <em>{option.name}</em>
                            <progress max={100} value={calcultePercentage(option.votes, pollData.votes).toFixed(0)}/>
                            <input type="radio" name={pollData.id.toString()} value={option.id} checked={selectedOptionId === option.id} onChange={() => handleOptionChange(option.id)}/>
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