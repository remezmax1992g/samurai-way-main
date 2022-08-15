import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./Redux/redux-store";
import {Provider} from "./StoreContext";

const rerenderEntireTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('root')
    )
};
rerenderEntireTree()

store.subscribe(rerenderEntireTree)