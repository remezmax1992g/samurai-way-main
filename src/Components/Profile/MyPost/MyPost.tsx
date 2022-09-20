import React from 'react';
import classes from ".//MyPost.module.css";
import Post from "./Post/Post";
import {MyPostContainerPropsType} from "./MyPostContainer";
import {AddPostReduxForm} from "./AddPostForm/AddPostReduxForm";

const MyPost = (props: MyPostContainerPropsType) => {

        let postsElement = props.statePost.postsData.map((p) =>
            <div key = {p.id}>
                <Post message={p.message}
                      likeCount={p.likeCount}/>
            </div>)

        let addNewPostHandler = (values: any) => {
            props.addPost(values.newPostBody)
        }

        // let addPostKeyboardClick = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        //     if (event.key === "Enter" && event.ctrlKey) {
        //         props.addPost()
        //     }
        // }

        return (
            <div className={classes.postBlock}>
                <div>
                    <h2>My posts</h2>
                </div>
               <AddPostReduxForm onSubmit={addNewPostHandler}/>
                <div className={classes.posts}>
                    {postsElement}
                </div>
            </div>
        );
    }
;

export default MyPost;