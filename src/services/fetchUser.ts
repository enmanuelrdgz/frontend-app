import axios from "axios";

export type User = {
    id: number
    nickname: string,
    password: string,
    image: string
}

export const fetchUser = async (): Promise<User> => {
    const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + "/api/user/" + localStorage.getItem("id"), {token: localStorage.getItem("token")}); //esto deberia ser un parametro de configuracion
    return response.data as User; // Se asume que la API devuelve datos en el formato esperado.
};