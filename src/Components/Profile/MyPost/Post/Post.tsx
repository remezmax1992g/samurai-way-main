import React from 'react';
import classes from ".//Post.module.css";
import {PostsDataType} from "../../../../Redux/reducers/profile-reducer";

const Post = React.memo((props:PostsDataType) => {
    console.log("Post")
    return (
     <span>
         <div className={classes.item}>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbNslP7-_P7jz5MrT5yhW14y_IzBDbZZT0ag&usqp=CAU" alt="no photo"/>
             {props.message}
             <div><span>Like {props.likeCount}</span></div>
         </div>

     </span>
    );
});

export default Post;