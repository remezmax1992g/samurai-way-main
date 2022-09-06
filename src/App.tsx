import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import {Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";


function App() {

    return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route exact path="/Dialogs" render={() => <DialogsContainer/>}/>
                    <Route exact path="/Profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route exact path="/Users" render={() => <UsersContainer/>}/>
                    <Route exact path="/News" render={() => <News/>}/>
                    <Route exact path="/Music" render={() => <Music/>}/>
                    <Route exact path="/Settings" render={() => <Settings/>}/>
                    <Route exact path="/Login" render={() => <Login/>}/>
                </div>
            </div>
    );
}

export default App;
