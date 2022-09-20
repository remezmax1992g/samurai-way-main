import React from 'react';
import {Field, InjectedFormProps} from "redux-form";
export type AddMessageFormType = {
    textarea: string
}

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Enter your message" name="newMessageBody" component="textarea"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
};

export default AddMessageForm;