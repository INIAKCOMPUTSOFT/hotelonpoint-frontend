import Dashboard from './components/userDashoard/dashboard/dashboard';
import React from 'react';
import { Route } from "react-router-dom";
import UserNavbar from './components/userDashoard/usernav/usernav';

function UserRoute(){
    return(
        <div className="container">
            <UserNavbar />        
            <Route exact path="/dashboard" component={Dashboard} />
        </div>
    )

}

export default UserRoute