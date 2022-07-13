import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {RootStateType} from "./Redux/state";
import Dialogs from "./Components/Dialogs/Dialogs";
import Profile from "./Components/Profile/Profile";

type AppType = {
    state: RootStateType
    addPost: () => void
    onChangeNewPostHandler: (newPostText: string) => void
}

function App(props: AppType) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route exact path="/Dialogs" render={() => <Dialogs stateDialog={props.state.dialogsPage}/>}/>
                    <Route exact path="/Profile" render={() => <Profile statePostsData={props.state.profilePage}
                                                                        addPost={props.addPost}
                                                                        onChangeNewPostHandler={props.onChangeNewPostHandler}/>}/>
                    <Route exact path="/News" render={() => <News/>}/>
                    <Route exact path="/Music" render={() => <Music/>}/>
                    <Route exact path="/Settings" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
