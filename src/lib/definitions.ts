export interface UserData {
    id: number,
    nickname: string,
    image: string
}

export interface OptionData {
    id: number,
    name: string,
    votes: number
}

export interface PollData {
    id: number,
    title: string,
    user: UserData,
    options: OptionData[],
    total_votes: number,
    created_at: string
}