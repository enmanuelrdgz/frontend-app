import AuthForm from "@/components/AuthForm";
import styles from "@/styles/AuthPages.module.css"

const SignInPage: React.FC = () => {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Sign In</h1>
            <AuthForm action="/auth/signin" />
        </main>
    )
}

export default SignInPage;