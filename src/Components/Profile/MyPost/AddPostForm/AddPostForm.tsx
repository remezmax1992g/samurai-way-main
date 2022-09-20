import React from 'react';
import {Field, InjectedFormProps} from "redux-form";
export type AddPostFormType = {
    textarea: string
}

const AddPostForm: React.FC<InjectedFormProps<AddPostFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Enter your post" name="newPostBody" component="textarea"/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
);
};

export default AddPostForm;