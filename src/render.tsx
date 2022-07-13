import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, onChangeNewPostHandler, RootStateType} from "./Redux/state";


export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} onChangeNewPostHandler={onChangeNewPostHandler}/>,
        document.getElementById('root')
    )
};