import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "8a3ca6c1-dfb0-48cf-8608-08d82687d761"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    getAuth(){
        return  instance.get("auth/me")
            .then(response => {
                return response.data
            })
    },
    getProfile(userID: string){
        return instance.get(`profile/${userID}`)
            .then(response => {
                return response.data
            })
    },
    deleteFollow(id: number){
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })

    },
    postFollow(id: number){
        return instance.post(`follow/${id}`, {})
            .then(response => {
                return response.data
            })
    }
}