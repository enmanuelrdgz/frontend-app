"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState, useEffect } from "react";

const IndexPage: React.FC = () => {

    const router = useRouter()

    const [isLoginDialogOpen, setIsLoginDialogOpen] = useState<boolean>(false);
    const [isSignUpDialogOpen, setIsSignUpDialogOpen] = useState<boolean>(false);

    const [loginFormNicknameInput, setLoginFormNicknameInput] = useState<string>("")
    const [loginFormPasswordInput, setLoginFormPasswordInput] = useState<string>("")
    const [signUpFormNicknameInput, setSignUpFormNicknameInput] = useState<string>("")
    const [signUpFormPasswordInput, setSignUpFormPasswordInput] = useState<string>("")

    const handleLoginSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        axios.post("url", {nickname: loginFormNicknameInput, password: loginFormPasswordInput})
        .then(res => {
            localStorage.setItem("token", res.data.token)
            router.push("/home")
        })
        .catch()
    };

    const handleSignUpSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        axios.post("url", {nickname: signUpFormNicknameInput, password: signUpFormPasswordInput})
        .then(res => {
            localStorage.setItem("token", res.data.token)
            router.push("/home")
        })
        .catch(err => {
            
        })
    };

    const handleLoginFormNicknameInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLoginFormNicknameInput(event.target.value)
    }

    const handleLoginFormPasswordInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLoginFormPasswordInput(event.target.value)
    }

    const handleSignUpFormNicknameInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSignUpFormNicknameInput(event.target.value)
    }

    const handleSignUpFormPasswordInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSignUpFormPasswordInput(event.target.value)
    }

    return (
        <main>
            <section>
                <h1>Index Page</h1>
                <p>
                    Description for index page
                </p>
            </section>
            
            <section>
                <button onClick={() => setIsLoginDialogOpen(true)}>Log In</button>

                <dialog open={isLoginDialogOpen} onClose={() => setIsLoginDialogOpen(false)}>
                    <form onSubmit={handleLoginSubmit}>
                        <h2>Log In</h2>

                        <fieldset>
                            <legend>Enter your nickname and password</legend>

                            <label>Nickname:
                                <input
                                    type="text"
                                    onChange={handleLoginFormNicknameInputChange}
                                    required
                                />
                            </label>
                            
                            <label>Password:
                                <input
                                    type="password"
                                    onChange={handleLoginFormPasswordInputChange}
                                    minLength={8}
                                    required
                                />
                            </label>

                            <button type="submit">
                                Send
                            </button>
                        </fieldset>

                        <strong>Mensaje dinamico devuelto por la api</strong>
                    </form>

                    <button onClick={() => setIsLoginDialogOpen(false)}>Go Back</button>       
                </dialog>
            </section>

            <section>
                <button onClick={() => setIsSignUpDialogOpen(true)}>Sign Up</button>    

                <dialog open={isSignUpDialogOpen} onClose={() => setIsSignUpDialogOpen(false)}>
                    <form onSubmit={handleSignUpSubmit}>
                        <h2>Sign Up</h2>

                        <fieldset>
                            <legend>Enter a new nickname and password</legend>

                            <small>The password must be at least 8 characters long</small>

                            <label>Nickname:
                                <input
                                    type="text"
                                    onChange={handleSignUpFormNicknameInputChange}
                                    required
                                />
                            </label>
                            
                            <label>Password:
                                <input
                                    type="password"
                                    onChange={handleSignUpFormPasswordInputChange}
                                    minLength={8}
                                    required
                                />
                            </label>

                            <button type="submit">
                                Send
                            </button>
                        </fieldset>

                        <strong>Mensaje dinamico devuelto por la api</strong>  
                    </form>   
                    <button onClick={() => setIsSignUpDialogOpen(false)}>Close</button>    
                </dialog>
            </section>
        </main>
    );
};

export default IndexPage;