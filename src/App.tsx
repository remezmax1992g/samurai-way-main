import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile, {ProfilePropsType} from "./Components/Profile/Profile";
import Dialogs, {DialogsArrayPropsType} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {MyPostArrayPropsType} from "./Components/Profile/MyPost/MyPost";

type AppPropsType = {
    state: ArrayAppType
}
export type ArrayAppType = {
    profilePage: MyPostArrayPropsType,
    messagesPage: DialogsArrayPropsType
}

function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route exact path="/Dialogs" render= {() => <Dialogs stateDialogs = {props.state.messagesPage}/>}/>
                    <Route exact path="/Profile" render= {() => <Profile statePostsData = {props.state.profilePage}/>}/>
                    <Route exact path="/News" render= {() => <News/>}/>
                    <Route exact path="/Music" render= {() => <Music/>}/>
                    <Route exact path="/Settings" render= {() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
