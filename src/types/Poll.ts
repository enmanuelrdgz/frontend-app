import { Option } from "./Option";
import { User } from "./User";

export interface PollData {
    id: number,
    title: string,
    user: User,
    options: Option[],
    votes: number,
    created_at: string
}