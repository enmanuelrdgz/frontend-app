"use client"

import React, { useEffect, useState } from "react";
import Poll from "../../components/Poll"
import { PollData } from "@/lib/definitions";
import axios from "axios";
import styles from "@/styles/HomePage.module.css"

const HomePage: React.FC = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [polls, setPolls] = useState<PollData[]>([] as PollData[]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get(process.env.NEXT_PUBLIC_API_URL + "/poll")
            .then(res => {
                setPolls(res.data.polls as PollData[]);
                console.log(polls)
            })
            .catch(err => {
                setError(err.message)
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);

  return (
        <main>
            {
                loading ?

                (
                    <strong className={styles.strong}>Loading...</strong>
                )

                :
            
                error ? 

                (
                    <strong className={styles.strong}>{error}</strong>
                )

                :

                polls.length == 0 ?

                (
                    <strong className={styles.strong}>There's no polls</strong>
                )

                :

                (
                    <>
                        <div className={styles.gap}/>
                        <ul className={styles.ul}>
                            {
                                polls.map((poll: PollData) => (
                                    <li key={poll.id}>
                                        <Poll id={poll.id} title={poll.title} user={poll.user} options={poll.options} total_votes={poll.total_votes} created_at={poll.created_at}></Poll>
                                    </li>
                                ))
                            }
                        </ul>
                    </>
                                    
                )
            }
        </main>
  );
};

export default HomePage;
