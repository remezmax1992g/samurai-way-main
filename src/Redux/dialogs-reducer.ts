import {ActionType} from "./store";
import {v1} from "uuid";

export type UpdateMessageTextActionType = ReturnType<typeof updateMessageTextActionCreator>
export type SendNewMessageActionType = ReturnType<typeof sendNewMessageActionCreator>
export type DialogsPageType = {
    dialogData: Array<DialogDataType>,
    messagesData: Array<MessagesDataType>,
    newMessageText: string
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
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT"
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
    newMessageText: ""
}
const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType): DialogsPageType => {
    switch (action.type) {
        case SEND_NEW_MESSAGE:
            let newMessage: MessagesDataType = {
                id: v1(),
                message: state.newMessageText,
            }
            return {...state, messagesData: [...state.messagesData, newMessage], newMessageText: ""}
        case UPDATE_MESSAGE_TEXT:
            return {...state, newMessageText: action.payload.newMessageText}
        default:
            return state
    }
}

export const updateMessageTextActionCreator = (newMessageText: string) => ({
    type: UPDATE_MESSAGE_TEXT,
    payload: {newMessageText}
}) as const
export const sendNewMessageActionCreator = () => ({type: SEND_NEW_MESSAGE}) as const

export default dialogsReducer