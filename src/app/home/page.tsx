import React from "react";
import Poll from "../../components/Poll"
import { PollData } from "@/lib/definitions";
import axios from "axios";
import styles from "@/styles/HomePage.module.css"

const HomePage: React.FC = async () => {

  let polls: PollData[] = [];
  let networkError: boolean = false

  axios.get(process.env.NEXT_PUBLIC_API_URL + '/poll')
    .then( response => {
      polls = response.data as PollData[];
    })
    .catch(err => {
      networkError = true;
      console.log(err.message);
    })

  return (
    <>      
      <main>
          {
              networkError ? 

              (
                <strong className={styles.strong}>Network error. Please check everything is ok and then reload the page</strong>
              )

              :

              polls.length == 0 ?

              (
                  <strong className={styles.strong}>There's no polls</strong>
              )

              :

              (
                  <ul className={styles.ul}>
                      {
                      polls.map((poll: PollData) => (
                          <li key={poll.id}>
                              <Poll id={poll.id} title={poll.title} user={poll.user} options={poll.options} votes={poll.votes} created_at={poll.created_at}></Poll>
                          </li>
                      ))
                      }
                  </ul>                
              )
          }
      </main>
    </>
  );
};

export default HomePage;
