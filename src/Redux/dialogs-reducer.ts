import {ActionType} from "./store";
import {v1} from "uuid";

export type SendNewMessageActionType = ReturnType<typeof sendNewMessage>
export type DialogsPageType = {
    dialogData: Array<DialogDataType>,
    messagesData: Array<MessagesDataType>,
}
export type MessagesDataType = {
    id: string,
    message: string,
}
export type DialogDataType = {
    id: string,
    name: string,
}


const SEND_NEW_MESSAGE = "SEND-NEW-MESSAGE";
let initialState = {
    messagesData: [
        {id: v1(), message: "Hi"},
        {id: v1(), message: "How is your IT-learning?"},
        {id: v1(), message: "How are you?"},
        {id: v1(), message: "What are you doing"},
        {id: v1(), message: "Bye"},
        {id: v1(), message: "What's up"},
        {id: v1(), message: "Sound great"},
    ],
    dialogData: [
        {id: v1(), name: "Max"},
        {id: v1(), name: "Dima"},
        {id: v1(), name: "Andrey"},
        {id: v1(), name: "Victor"},
        {id: v1(), name: "Sveta"},
        {id: v1(), name: "Artur"}
    ],
}
const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType): DialogsPageType => {
    switch (action.type) {
        case SEND_NEW_MESSAGE:
            let newMessage: MessagesDataType = {
                id: v1(),
                message: action.payload.newTextMessage,
            }
            return {...state, messagesData: [...state.messagesData, newMessage]}
        default:
            return state
    }
}

export const sendNewMessage = (newTextMessage: string) => ({
    type: SEND_NEW_MESSAGE,
    payload: {newTextMessage}}) as const

export default dialogsReducer