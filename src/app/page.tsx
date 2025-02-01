"use client"

import styles from '@/styles/IndexPage.module.css'
import globalStyles from "@/styles/globals.module.css"
import AuthForm from "@/components/AuthForm";
import { useState } from "react";

const IndexPage: React.FC = () => {

    const [isLoginDialogOpen, setIsLoginDialogOpen] = useState<boolean>(false);
    const [isSignUpDialogOpen, setIsSignUpDialogOpen] = useState<boolean>(false);

    const handleLoginDialogShow = () => {
        if(isLoginDialogOpen) {

        } else {

        }
    }

    return (
        <main className={styles.main}>
            <section>
                <h1>Quick Polls</h1>
                <p>Create, participate, and share polls</p>
            </section>
            
            <div className={styles.btnContainer}>
                <section>
                    <button className={styles.btn} onClick={() => setIsLoginDialogOpen(true)}>Log In</button>

                    <dialog className={styles.dialog} open={isLoginDialogOpen} onClose={() => setIsLoginDialogOpen(false)}>
                        <AuthForm title="Log In" legend="Enter your nickname and password" isSignUpForm={false}/>
                        <button className={globalStyles.btn2} onClick={() => setIsLoginDialogOpen(false)}>Go Back</button>       
                    </dialog>
                </section>

                <section>
                    <button className={styles.btn} onClick={() => setIsSignUpDialogOpen(true)}>Sign Up</button>    

                    <dialog className={styles.dialog} open={isSignUpDialogOpen} onClose={() => setIsSignUpDialogOpen(false)}>
                        <AuthForm title="Sign Up" legend="Enter a new nickname and password" isSignUpForm={true}/>
                        <button className={globalStyles.btn2} onClick={() => setIsSignUpDialogOpen(false)}>Go Back</button>    
                    </dialog>
                </section>
            </div>
        </main>
    );
};

export default IndexPage;