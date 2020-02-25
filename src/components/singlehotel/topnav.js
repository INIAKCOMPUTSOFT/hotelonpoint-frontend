import React from 'react'
import './topnav.css'
function TopNav(prop){

    return(
    <div className="top mt-3 mb-2 carrier">
    <ul class="nav nav-fill nav-pills">
      <li class="nav-item">
        <a class="nav-link" href={prop.Overviewid}>Overview </a>
      </li>
      <li class="nav-item">
        <a class="nav-link"  href={prop.Roomid}>Rooms</a>
      </li>
      <li class="nav-item">
        <a class="nav-link"  href={prop.Hotelid}>HotelDescription</a>
      </li>
      <li class="nav-item">
        <a class="nav-link"  href={prop.Amenitiesid}>Amenities</a>
      </li>
      <li class="nav-item">
        <a class="nav-link"  href={prop.id}>Map</a>
      </li>
      <li class="nav-item">
        <a class="nav-link"  href={prop.Reviewid}>Reviews</a>
      </li>
    </ul>
</div>
    )
}

export default TopNav 