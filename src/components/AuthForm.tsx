"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuth } from '../context/AuthContext';
import { ChangeEvent, useState } from "react"
import styles from "@/styles/AuthForm.module.css"
import globalStyles from "@/styles/globals.module.css"

interface AuthFormProps {
    action: string
}

const AuthForm: React.FC<AuthFormProps> = ({action}) => {
    const { signin } = useAuth();
    const router = useRouter()

    const [nickname, setNickname] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [warning, setWarning] = useState<string>("");

    const handleNicknameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNickname(event.target.value)
    }

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        
        const body = {
            nickname: nickname,
            password: password
        }

        axios.post("http://localhost:8080" + action, body)
            .then(res => {
                signin(res.headers['token'])
                router.push("/home")
            })
            .catch(err => {
                console.log(err.message)
                setWarning(err.response?.data.message)
            })
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label>Nickname:
                <input
                    className={globalStyles.input}
                    type="text"
                    value={nickname}
                    onChange={handleNicknameChange}
                    required
                    style={{marginBottom: "10px"}}
                />
            </label>
            
            <label>Password:
                <input
                    className={globalStyles.input}
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    minLength={8}
                    required
                    style={{marginBottom: "10px"}}
                />
            </label>

            <button className={globalStyles.btn2} type="submit">
                Send
            </button>

            <strong style={{color: "red"}}>{warning}</strong>
        </form>
    )
}

export default AuthForm;