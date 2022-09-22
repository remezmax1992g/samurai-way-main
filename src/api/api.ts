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
    deleteFollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    postFollow(id: number) {
        return instance.post(`follow/${id}`, {})
            .then(response => {
                return response.data
            })
    }
}

export const profileAPI = {
    getProfile(userID: string) {
        return instance.get(`profile/${userID}`)
            .then(response => {
                return response.data
            })
    },
    getStatus(userID: string) {
        return instance.get(`profile/status/${userID}`)
            .then(response => {
                return response.data
            })
    },
    putStatus(newStatusText: string) {
        return instance.put(`profile/status`, {status: newStatusText})
            .then(response => {
                return response.data
            })
    }
}

export const authAPI = {
    getAuth() {
        return instance.get("auth/me")
            .then(response => {
                return response.data
            })
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post("auth/login", {email, password, rememberMe})
            .then(response => {
                return response.data
            })
    },
    logout() {
        return instance.delete("auth/login")
            .then(response => {
                return response.data
            })
    }
}