import React, {ChangeEvent, KeyboardEvent} from 'react';
import classes from ".//MyPost.module.css";
import Post from "./Post/Post";
import {MyPostContainerPropsType} from "./MyPostContainer";

const MyPost = (props: MyPostContainerPropsType) => {

        let postsElement = props.statePost.postsData.map((p) => <Post key={p.id} message={p.message}
                                                                    likeCount={p.likeCount}/>)

        let addPostClick = () => {
            props.addPost()
        }

        let addPostKeyboardClick = (event: KeyboardEvent<HTMLTextAreaElement>) => {
            if (event.key === "Enter" && event.ctrlKey) {
                props.addPost()
            }
        }

        let onChangeNewPostHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
            let newPost = event.currentTarget.value
            props.updateNewPost(newPost)
        }

        return (
            <div className={classes.postBlock}>
                <div>
                    <h2>My posts</h2>
                </div>
                <div><textarea onChange={onChangeNewPostHandler}
                               value={props.statePost.newPostText}
                               onKeyDown={addPostKeyboardClick}></textarea></div>
                <div>
                    <button onClick={addPostClick}>Add post</button>
                </div>
                <div className={classes.posts}>
                    {postsElement}
                </div>
            </div>
        );
    }
;

export default MyPost;