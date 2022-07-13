import React, {ChangeEvent, KeyboardEvent} from 'react';
import classes from ".//MyPost.module.css";
import Post from "./Post/Post";
import {ProfilePageType} from "../../../Redux/state";

type PostPropsType = {
    statePost: ProfilePageType
    addPost: () => void
    newPostText: string
    onChangeNewPostHandler: (newPostText: string) => void
}

const MyPost = (props: PostPropsType) => {

        let postsElement = props.statePost.postsData.map(p => <Post key={p.id} message={p.message}
                                                                    likeCount={p.likeCount}/>)

        let addPost = () => {
            props.addPost()
        }

        let addPostKeyboard = (event: KeyboardEvent<HTMLTextAreaElement>) => {
            if (event.key === "Enter" && event.ctrlKey === true) {
                props.addPost()
            }
        }

        let onChangeNewPostHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
            props.onChangeNewPostHandler(event.currentTarget.value)
        }

        return (
            <div className={classes.postBlock}>
                <div>
                    <h2>My posts</h2>
                </div>
                <div><textarea onChange={onChangeNewPostHandler}
                               value={props.newPostText}
                               onKeyDown={addPostKeyboard}></textarea></div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div className={classes.posts}>
                    {postsElement}
                </div>
            </div>
        );
    }
;

export default MyPost;