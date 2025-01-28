"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react"

interface AuthFormProps {
    title: string,
    legend: string,
    isSignUpForm: boolean
}

const AuthForm: React.FC<AuthFormProps> = ({title, legend, isSignUpForm}) => {
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

        const route = isSignUpForm ? '/api/auth/signup' : 'api/auth/login';

        axios.post(process.env.NEXT_PUBLIC_API_URL + route, body)
            .then(res => {
                localStorage.setItem("token", res.data.token)
                router.push("/home")
            })
            .catch(err => {
                console.log(err.message)
                setWarning(err.response?.data.message)
            })
    };

    return (
        <form onSubmit={handleSubmit}>
            <strong>{title}</strong>

            <fieldset>
                <legend>{legend}</legend>

                <label>Nickname:
                    <input
                        type="text"
                        value={nickname}
                        onChange={handleNicknameChange}
                        required
                    />
                </label>
                
                <label>Password:
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        minLength={8}
                        required
                    />
                </label>

                <button type="submit">
                    Send
                </button>
            </fieldset>

            <strong>{warning}</strong>
        </form>
    )
}

export default AuthForm;