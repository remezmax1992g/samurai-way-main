import React from 'react';
import {Field, InjectedFormProps} from "redux-form";
import {maxLengthCreator, required} from "../../../../utilits/validation/validators";
import FormsControl from "../../../../utilits/FormsControl/FormsControl";
export type AddPostFormType = {
    textarea: string
}
const maxLength10 = maxLengthCreator(10)
const Textarea = FormsControl("textarea")
const AddPostForm: React.FC<InjectedFormProps<AddPostFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Enter your post" name="newPostBody" component={Textarea} validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
);
};

export default AddPostForm;