import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route exact path="/Dialogs" component={Dialogs}/>
                    <Route exact path="/Profile" component={Profile}/>
                    <Route exact path="/News" component={News}/>
                    <Route exact path="/Music" component={Music}/>
                    <Route exact path="/Settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
