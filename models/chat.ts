import { User } from "./user";

export interface Chat {
    messages: Message[]
}

export interface Message {
    _id: number,
    title: string | null,
    text: string,
    author: User,
    date: Date,
    likes: User[],
    replies: Message[],
}