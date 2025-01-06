import styles from "../styles/RegisterCard.module.css"
import { useState, ChangeEvent, FormEvent } from "react"
import axios from "axios"
import { useRouter } from "next/router"
import { useAuth } from "@/context/AuthContext"

type FormData  = {
    nickname: String,
    password: String
}

export default function RegisterCard() {

  const [formData, setFormData] = useState<FormData>({nickname: "", password: ""})

  const { login } = useAuth();

  const router = useRouter();
    
  // Manejar cambios en los inputs
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState, // Copiamos el estado actual
      [name]: value, // Actualizamos el campo dinámicamente usando su `name`
    }));
  };

  // Manejar el envío del formulario
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita el envío por defecto

    // Enviar datos a la API
    axios.post(process.env.NEXT_PUBLIC_API_URL + "/api/auth/register", formData)
    .then( response => {
      const token = response.data.token;
      // Guardar el token en LocalStorage
      localStorage.setItem("token", token);
      login();
      router.push("/");
    })
    .catch( err => {
      console.log(err.message);
      alert("Something went wrong...")
    })
  };
  

    return (
        <div className={styles["body"]}>
            <div className={styles["container"]}>
            <form onSubmit={handleSubmit}>
                <div className={styles["nickname-input-container"]}>
                    <label htmlFor="nickname-input">Nickname</label>
                    <input name="nickname" id="nickname-input" className={styles["nickname-input"]} type="text" onChange={handleChange}/>                   
                </div>
                <div className={styles["password-input-container"]}>
                    <label htmlFor="password-input">Password</label>
                    <input name="password" className={styles["password-input"]} type="password" onChange={handleChange}/>
                </div>
                <div className={styles["button-container"]}>
                    <button id="password-input" className={styles["submit-button"]} type="submit">Send</button>
                </div>
            </form>
            </div>
        </div> 
    )
}