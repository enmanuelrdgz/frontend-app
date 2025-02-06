import AuthForm from "@/components/AuthForm";
import styles from "@/styles/AuthPages.module.css"

const SignInPage: React.FC = () => {
    return (
        <main className={styles.main}>
            <h1>Sign In</h1>
            <AuthForm action="/signin" />
        </main>
    )
}

export default SignInPage;