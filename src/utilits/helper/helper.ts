import {UserType} from "../../Redux/reducers/users-reducer";

export const updateObjInArray = (items: Array<UserType>, userID: number, newObj: Object) => {
    return items.map(u => u.id === userID ? {...u, ...newObj} : u)
}