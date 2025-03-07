import Form from "@/components/Form";
import styles from "@/styles/AuthPages.module.css"

const SignInPage: React.FC = () => {
    return (
        <main className={styles.main}>
            <h1>Sign In</h1>
            <Form action="/auth/signin" />
        </main>
    )
}

export default SignInPage;