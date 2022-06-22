import React from 'react';
import classes from ".//MyPost.module.css";
import Post from "./Post/Post";

const MyPost = () => {
    return (
     <div>
           <div>
                My posts
           </div>
               <textarea></textarea>
               <button>Add post</button>
               <Post message="Hi, how are you?"/>
               <Post message="It's my first post"/>
     </div>
    );
};

export default MyPost;