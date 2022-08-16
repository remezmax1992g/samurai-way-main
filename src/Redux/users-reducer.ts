import {ActionType} from "./store";

export type UsersType = {
    name:string
    id: number
    photos:{
        small: string,
        large: string
    },
    status: string,
    followed: boolean
}
type LocationType = {
    city: string,
    country: string
}

export type UsersPageType = {
    items: Array<UsersType>
}

export type FollowToUserActionCreatorType = ReturnType<typeof followToUserActionCreator>
export type UnfollowToUserActionCreatorType = ReturnType<typeof unfollowToUserActionCreator>
export type SetUsersActionCreatorType = ReturnType<typeof setUsersActionCreator>

const FOLLOW_TO_USER = "FOLLOW-TO-USER"
const UNFOLLOW_TO_USER = "UNFOLLOW-TO-USER"
const SET_USERS = "SET-USERS"

let initialState: UsersPageType = {
    items: [
        /*{id: v1(), follow: false, fullName: "Maxim", status: "I'm boss", location: {city: "Minsk", country: "Belarus"}, photoUrl:"https://sun9-44.userapi.com/impf/c837437/v837437877/1c8b3/1oyCdQScwEY.jpg?size=2560x1920&quality=96&sign=46274b18ea4bae87fee7ceea49983881&type=album"},
        {id: v1(), follow: true, fullName: "Artem", status: "I'm boss", location: {city: "Moscow", country: "Russia"}, photoUrl: "https://sun2.beltelecom-by-minsk.userapi.com/impg/x-6BrTMlYjtGtPchPHQUT6v0o1EkWh08GWiDsw/fumKmvIYugc.jpg?size=1067x1601&quality=96&sign=456da46bcc49287764e8483aea2a1c44&type=album"},
        {id: v1(), follow: false, fullName: "Alex", status: "I'm boss", location: {city: "Kiev", country: "Ukraine"}, photoUrl: "https://sun9-64.userapi.com/impg/RWYP17KNufgHQHHkmw3a0pdZQESsOVwjo532hg/j_mdcacpszc.jpg?size=1152x2048&quality=96&sign=09235f4485cc7a4eebd3dfee3e0c6d6e&type=album"},
        {id: v1(), follow: true, fullName: "Pavel", status: "I'm boss", location: {city: "Berlin", country: "Germany"}, photoUrl: "https://sun9-41.userapi.com/impg/6YA9vXfZ-BYNjuOrkpL2_j-u-hZSbZfxyofKxg/nGy2ezA9RKo.jpg?size=1442x2160&quality=96&sign=d78d458081655cdfe78b4186a99163eb&type=album"},*/
    ],
}

const usersReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case SET_USERS:
            return {...state, items: [...state.items, ...action.payload.users]}
        case FOLLOW_TO_USER:
            return {...state, items: state.items.map(u => u.id === action.payload.userID ? {...u, followed: true}: u)}
        case UNFOLLOW_TO_USER:
            return {...state, items: state.items.map(u => u.id === action.payload.userID ? {...u, followed: false} : u)}
        default:
            return state
    }
}
//actionCreator
export const followToUserActionCreator = (userID: number) => ({
    type: FOLLOW_TO_USER,
    payload: {userID}
}) as const
export const unfollowToUserActionCreator = (userID: number) => ({
    type: UNFOLLOW_TO_USER,
    payload: {userID}}) as const
export const setUsersActionCreator = (users: Array<UsersType>) => ({
    type: SET_USERS,
    payload: {users}}) as const

export default usersReducer