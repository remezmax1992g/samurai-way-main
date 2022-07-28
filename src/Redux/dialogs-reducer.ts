import {ActionType, DialogsPageType, MessagesDataType} from "./store";

const SEND_NEW_MESSAGE = "SEND-NEW-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT"
let initialState = {
    messagesData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your IT-learning?"},
        {id: 3, message: "How are you?"},
        {id: 4, message: "What are you doing"},
        {id: 5, message: "Bye"},
        {id: 6, message: "What's up"},
        {id: 7, message: "Sound great"},
    ],
    dialogData: [
        {id: 1, name: "Max"},
        {id: 2, name: "Dima"},
        {id: 3, name: "Andrey"},
        {id: 4, name: "Victor"},
        {id: 5, name: "Sveta"},
        {id: 6, name: "Artur"}
    ],
    newMessageText: ""
}
const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType) => {
    switch (action.type) {
        case SEND_NEW_MESSAGE:
            let newMessage: MessagesDataType = {
                id: state.messagesData.length + 1,
                message: state.newMessageText,
            }
            state.messagesData.push(newMessage)
            state.newMessageText = ""
            return state
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText
            return state
        default:
            return state
    }
}

export const updateMessageTextActionCreator = (newMessageText: string) => ({
    type: UPDATE_MESSAGE_TEXT,
    newMessageText: newMessageText
}) as const
export const sendNewMessageActionCreator = () => ({type: SEND_NEW_MESSAGE}) as const

export default dialogsReducer