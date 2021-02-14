import { type } from "os";

export type Choice = {
    text: string
    isAnswer: boolean
}

export type Question = {
    sentence: string
    choices: Choice[]
    explanation: string
    answer: number|null
}