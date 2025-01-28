
const AboutPage: React.FC = () => {
    return (
        <main>
            <h1>What is this site?</h1>

            <p>
                Quick Polls is a simple and generic poll system created by me for fun.
                The arquitecture of this system consists of three nodes:
                The core: this is a spring boot application that contains all the core logic
                The client: this is the site you are right now.
                The database: a postgres database

                theese three components are running in docker containers, and this containers
                are runing in Azure. They have their own GitHub repositories too.

                I started this project in december 2024, and so far I have been developing it by my own.
            </p>

            <section>
                <h2>QuickPolls Core</h2>
                <p>
                    It is an Spring Boot application that contains the core logic of the system, and also exposes this logic as an API 
                    for the client to consume. It depends on a postgres database. 
                </p>
            </section>

            <section>
                <h2>QuickPolls Client</h2>
                <p>
                    it is the site you are visiting right now. It's a next.js application that serves a web interface to interact with the Core.
                    To be honest, it was hard to get use to this framwork and frontend development in general. But I think i dit it good.
                </p>
            </section>
        </main>
    )
}