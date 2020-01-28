import './usernav.css';

import { Link } from 'react-router-dom';
import React from 'react';

function UserNavbar(){
return(
  <div className="mb-3">
<nav className="navbar-expand-lg navbar-light shadow   ">
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="nav">
        <li className="nav-item">    
          <Link to='/dashboard' className="nav-link">
          My DashBoard
            </Link>
        </li>
        <li className="nav-item">
          <Link to='/bookings' className="nav-link">
            My Bookings
            </Link>
        </li>
        <li className="nav-item">
            <Link to='/reviews' className="nav-link">
                My Reviews
              </Link>
        </li>
        <li className="nav-item">
          <Link to='/settings' className="nav-link">
         Settings
            </Link>
        </li>
      </ul> 
      </div>
    </nav>

</div>

)
}


export default UserNavbar