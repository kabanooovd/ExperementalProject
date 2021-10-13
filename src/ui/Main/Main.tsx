import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Login} from "../Login/Login";
import {Registration} from "../Registration/Registration";
import {ProfilePage} from "../ProfilePage/ProfilePage";
import {PasswordRecovery} from "../ResetPassword/passwordRecovery";
import {SetPassword} from "../PasswordSettings/SetPassword";
import {CommonTestsStuff} from "../../common/CommonTestsStuff/CommonTestsStuff";
import {ErrorPage} from "../../common/ErrorPage/ErrorPage";

export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/reg',
    PROFILE: '/profile',
    PASSWORD_RECOVERY: '/passRecovery',
    SET_PW: '/setPass',
    GARBAGE: '/differentStuff',
    ERROR_PAGE: '/404',
}

export const MainContent = () => {

    const initialTitle = 'Ready to work...'

    return(
        <div>
            <Switch>
                <Route exact path={'/'} render={() => <h1>{initialTitle}</h1>}/>
                <Route exact path={PATH.LOGIN} render={() => <Login/>}/>
                <Route path={PATH.REGISTRATION} render={() => <Registration/>}/>
                <Route path={PATH.PROFILE} render={() => <ProfilePage/>}/>
                <Route path={PATH.PASSWORD_RECOVERY} render={() => <PasswordRecovery/>}/>
                <Route path={PATH.SET_PW} render={() => <SetPassword/>}/>
                <Route path={PATH.GARBAGE} render={() => <CommonTestsStuff/>}/>
                <Route path={PATH.ERROR_PAGE} render={() => <ErrorPage/>}/>
                <Redirect from={'*'} to={'/404'}/>
            </Switch>
        </div>
    )
}