import React, {ComponentType} from 'react';
import './App.css';
import {HashRouter, Route, RouteComponentProps, withRouter} from "react-router-dom";
import Settings from "./Components/Settings/Settings";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializing} from "./Redux/reducers/app-reducer";
import store, {RootStateType} from "./Redux/redux-store";
import Preloader from "./Components/common/Preloader/Preloader";
import {WithSuspense} from "./Components/hoc/WithSuspense";

const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'))
const News = React.lazy(() => import('./Components/News/News'))
const Music = React.lazy(() => import('./Components/Music/Music'))

const SuspendedDialogs = WithSuspense(DialogsContainer)
const SuspendedProfile = WithSuspense(ProfileContainer)
const SuspendedNews = WithSuspense(News)
const SuspendedMusic = WithSuspense(Music)
type MapStateToPropsForAppType = {
    isInitialized: boolean
}
type MapDispatchToPropsForAppType = {
    initializing: () => void
}
type AppType = MapStateToPropsForAppType & MapDispatchToPropsForAppType & RouteComponentProps

class App extends React.Component<AppType> {
    componentDidMount() {
        this.props.initializing()
    }

    render() {
        if (!this.props.isInitialized) return <Preloader/>
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <div className="app-wrapper-content">
                    <Route exact path="/Dialogs" render={() => <SuspendedDialogs/>}/>
                    <Route exact path="/Profile/:userId?" render={() => <SuspendedProfile/>}/>
                    <Route exact path="/Users" render={() => <UsersContainer/>}/>
                    <Route exact path="/News" render={() => <SuspendedNews/>}/>
                    <Route exact path="/Music" render={() => <SuspendedMusic/>}/>
                    <Route exact path="/Settings" render={() => <Settings/>}/>
                    <Route exact path="/Login" render={() => <Login/>}/>
                    <Route exact path="/" render={() => <Login/>}/>
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
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    )
}
export default MainApp