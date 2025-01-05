import LoginCard from "@/components/LoginCard"
import styles from "../styles/login.module.css"

export default function Login() {
    return (
        <>
            <main className={styles["main"]}>
                <h2>Login</h2>
                <LoginCard />
            </main>
        </>
    )
}