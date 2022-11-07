import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import MainApp from './App';

const rerenderEntireTree = () => {
    ReactDOM.render(
        <MainApp/>,
        document.getElementById('root')
    )
};
rerenderEntireTree()
