import React, {ComponentType} from 'react';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import {BrowserRouter, Route, RouteComponentProps, withRouter} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializing} from "./Redux/reducers/app-reducer";
import store, {RootStateType} from "./Redux/redux-store";
import Preloader from "./Components/common/Preloader/Preloader";

type MapStateToPropsForAppType = {
    isInitialized: boolean
}
type MapDispatchToPropsForAppType = {
    initializing:() => void
}
type AppType = MapStateToPropsForAppType & MapDispatchToPropsForAppType & RouteComponentProps

class App extends React.Component<AppType> {
    componentDidMount() {
        this.props.initializing()
    }
    render() {
        if(!this.props.isInitialized) return <Preloader/>
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
                    <Route exact path="*" render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}
let mapStateToProps = (state: RootStateType): MapStateToPropsForAppType => {
    return {
        isInitialized: state.app.isInitialized
    }
}

const AppContainer = compose<ComponentType>(connect(mapStateToProps, {initializing}), withRouter)(App);
const MainApp = () => {
    return(
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}
export default MainApp