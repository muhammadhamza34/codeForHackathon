import React, { useState } from "react";
import { Route, } from "react-router-dom";
import Login from '../Screens/Login/Login';
import Dahboard from "../Screens/Dahboard/Dahboard";


export const AdminRoute = ({ component: Component,currentUser, ...rest }) => {
    // console.log(currentUser,"user")
// currentUser && Object.keys(currentUser).length !=0

    if (localStorage.getItem('uid') ) {
        if(localStorage.getItem('uid')=='qJXMmOTgVtYyxetsjL1IgU9H1Tr1' || currentUser?.isAdmin )
        {
            return (
                <Component {...rest} />
            )
        }
        else{
            return <Dahboard/>
        }
    }
    else {
        return <Login />
    }

}
