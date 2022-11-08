import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "aa708570-28f6-4af0-bbfe-8b64cb21c0d4"
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
    },
    putPhoto(file: File){
        const formData = new FormData()
        formData.append("image", file)
        return instance.put(`/profile/photo`, formData, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }})
            .then(response => {
                return response.data
            })
    },
    putProfile(profile: ProfileParamsType){
        return instance.put(`profile`, profile)
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
    login(data: LoginParamsType) {
        return instance.post("auth/login", data)
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
export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
}
export type ProfileParamsType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe: string
    contacts: ContactsType
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}