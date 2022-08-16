import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import Profile from "./Components/Profile/Profile";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";


function App() {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route exact path="/Dialogs" render={() => <DialogsContainer/>}/>
                    <Route exact path="/Profile" render={() => <Profile/>}/>
                    <Route exact path="/Users" render={() => <UsersContainer/>}/>
                    <Route exact path="/News" render={() => <News/>}/>
                    <Route exact path="/Music" render={() => <Music/>}/>
                    <Route exact path="/Settings" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
