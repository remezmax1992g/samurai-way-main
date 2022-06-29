import React from 'react';
import classes from ".//MyPost.module.css";
import Post from "./Post/Post";

const MyPost = () => {
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
                <Post message="Hi, how are you?"/>
                <Post message="It's my first post"/>
            </div>
        </div>
    );
};

export default MyPost;