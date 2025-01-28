"use client"

import AuthForm from "@/components/AuthForm";
import { useState } from "react";

const IndexPage: React.FC = () => {

    const [isLoginDialogOpen, setIsLoginDialogOpen] = useState<boolean>(false);
    const [isSignUpDialogOpen, setIsSignUpDialogOpen] = useState<boolean>(false);

    return (
        <main>
            <section>
                <h1>Quick Polls</h1>
                <p>Create, participate, and share polls</p>
            </section>
            
            <section>
                <button onClick={() => setIsLoginDialogOpen(true)}>Log In</button>

                <dialog open={isLoginDialogOpen} onClose={() => setIsLoginDialogOpen(false)}>
                    <AuthForm title="Log In" legend="Enter your nickname and password" isSignUpForm={false}/>
                    <button onClick={() => setIsLoginDialogOpen(false)}>Go Back</button>       
                </dialog>
            </section>

            <section>
                <button onClick={() => setIsSignUpDialogOpen(true)}>Sign Up</button>    

                <dialog open={isSignUpDialogOpen} onClose={() => setIsSignUpDialogOpen(false)}>
                    <AuthForm title="Sign Up" legend="Enter a new nickname and password" isSignUpForm={true}/>
                    <button onClick={() => setIsSignUpDialogOpen(false)}>Close</button>    
                </dialog>
            </section>
        </main>
    );
};

export default IndexPage;