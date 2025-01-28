import React from "react";
import Poll from "../../components/Poll"
import { PollData } from "@/types/Poll";

const HomePage: React.FC = async () => {

  const data = await fetch('https://api.vercel.app/blog')
  const polls = await data.json()

  return (
    <main>
        <ul>
        {
          polls.map((poll: PollData) => (
              <li key={poll.id}>
                <Poll id={poll.id} title={poll.title} user={poll.user} options={poll.options} votes={poll.votes} created_at={poll.created_at}></Poll>
              </li>
          ))
        }
        </ul>
    </main>
  );
};

export default HomePage;
