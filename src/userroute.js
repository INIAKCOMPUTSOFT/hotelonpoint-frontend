import Bookings from './components/userDashoard/bookings/bookings';
import Dashboard from './components/userDashoard/dashboard/dashboard';
import Myreviews from './components/userDashoard/reviews/reviews';
import Mysettings from './components/userDashoard/Settings/settings';
import React from 'react';
import { Route } from "react-router-dom";
import UserNavbar from './components/userDashoard/usernav/usernav';

function UserRoute(){
    return(
        <div className="container">
            <UserNavbar />        
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/bookings" component={Bookings}/>
            <Route exact path="/reviews" component={Myreviews}/>
            <Route exact path="/settings" component={Mysettings}/>

        </div>
    )
}

export default UserRoute