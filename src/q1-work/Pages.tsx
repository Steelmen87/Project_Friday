import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom";
import Error404 from './pages/Error404';
import EnteringAnewPassword from './pages/EnteringAnewPassword';
import Registration from "./pages/Registration";
import Profile from "./pages/Profile";
import Password_recovery from "./pages/Password_recovery";
import Test from "./pages/Test";
import Login from "./pages/Login";

export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    PROFILE: '/profile',
    PASSWORD_RECOVERY: '/password-recovery',
    ENTERING_NEW_PASSWORD: '/entering-new-password',
    TEST: '/test',
}

function Pages() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.LOGIN}/>}/>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.REGISTRATION} element={<Registration/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.PASSWORD_RECOVERY} element={<Password_recovery/>}/>
                <Route path={PATH.ENTERING_NEW_PASSWORD} element={<EnteringAnewPassword/>}/>
                <Route path={PATH.TEST} element={<Test/>}/>

                <Route path={'/*'} element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default Pages
