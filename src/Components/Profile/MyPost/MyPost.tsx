import React from 'react';
import classes from ".//MyPost.module.css";
import Post from "./Post/Post";

type MessageType = {
    id: number
    message: string
    likeCount: number
}

export type MyPostArrayPropsType = {
    postsData: Array<MessageType>
}

type MyPostPropsType = {
    statePostsData: MyPostArrayPropsType
}

const MyPost = (props: MyPostPropsType) => {

    let postsElement = props.statePostsData.postsData.map(p => <Post message={p.message} likeCount={p.likeCount}/>)
    return (
        <div className={classes.postBlock}>
            <div>
                <h2>My posts</h2>
            </div>
            <div><textarea></textarea></div>
            <div>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>
    );
};

export default MyPost;