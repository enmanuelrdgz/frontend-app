import Form from "@/components/Form";
import styles from "@/styles/AuthPages.module.css"

const SignUpPage: React.FC = () => {
    return (
        <main className={styles.main}>
            <h1>Sign Up</h1>
            <Form action="/auth/signup" />
        </main>
    )
}

export default SignUpPage;