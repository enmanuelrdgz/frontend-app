import axios from "axios";

export type Option = {
    id: number,
    name: string,
    votes: number,
    percentage: number
}

export type Creator = {
    id: number,
    nickname: string
    image: String
}

export type Survey = {
    id: number,
    title: String,
    creator: Creator,
    options: Option[],
    total_votes: number,
    created_at: number
}

export const fetchSurveys = async (): Promise<Survey[]> => {
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/api/survey"); //esto deberia ser un parametro de configuracion
    return response.data as Survey[]; // Se asume que la API devuelve datos en el formato esperado.
};