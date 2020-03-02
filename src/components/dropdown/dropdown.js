import "./dropdown.css"

import { Link } from 'react-router-dom'
import React from 'react'

function ProfileData (props){
    return(
        <div className="dropprofile dropdown" style={{marginTop:"-10px"}}>
        <span
        className="nav-link"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        >
        <img
        src={props.imageurl}
        alt="..."
        style={{
          width: 40,
          height: 40,
          marginLeft: 10,
          marginRight: 10
        }}
        className="rounded-circle"
        />{" "}
        <span style={{ color: "white", marginRight: 10 }}>
        {props.fullname}
        </span>
        </span> 
        <div
        className="dropdown-menu"
        aria-labelledby="dropdownMenuButton"
        
      >
        <div  className="d-none d-lg-block">
        {/* <a href="https://internal.hotelonpoints.com/" className="dropdown-item">My Dashboard</a> */}
        {/* <a href={`https://internal.hotelonpoints.com?id=${localStorage.token}`} className="dropdown-item">My Dashboard</a> */}
        <Link to="/dashboard" className="dropdown-item ">My Dashboard</Link>
        <Link  to="/bookings" className="dropdown-item ">Bookings</Link>
        <a href={`https://internal.hotelonpoints.com?id=${localStorage.token}`} className="dropdown-item">My Properties</a>
        <Link to="/reviews" className="dropdown-item">Reviews</Link>
      </div>
      </div>

</div>
    )
}

export default ProfileData



