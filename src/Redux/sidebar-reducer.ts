import {ActionType} from "./store";
export type SidebarPageType = {}

let initialState = {}

const sidebarReducer = (state: SidebarPageType = initialState, action: ActionType): SidebarPageType => {
    return state
}

export default sidebarReducer