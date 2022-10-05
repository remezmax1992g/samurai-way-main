import {addPost, ProfilePageType, profileReducer, setStatusText} from "./profile-reducer";
import {v1} from "uuid";

let profileState: ProfilePageType
beforeEach(() => {
    profileState = {
        profile: {
            userId: 1,
            lookingForAJob: true,
            lookingForAJobDescription: "",
            fullName: "",
            contacts: {
                github: "",
                vk: "",
                facebook: "",
                instagram: "",
                twitter: "",
                website: "",
                youtube: "",
                mainLink: "",
            },
            photos: {
                small: "",
                large: ""
            }
        },
        postsData: [
            {id: v1(), message: "Hi, how are you?", likeCount: 11},
            {id: v1(), message: "It's my first post", likeCount: 12},
        ],
        newStatusText: ""
}})
test("post should be added", () => {
    let newProfileState = profileReducer(profileState, addPost("You are cool"))
    expect(newProfileState.postsData.length).toBe(3)
    expect(newProfileState.postsData[2].message).toBe("You are cool")
})
test("status should be set", () => {
    let newProfileState = profileReducer(profileState, setStatusText("I'm ok"))
    expect(newProfileState.newStatusText).toBe("I'm ok")
})
