import './nav.css'

import { faHotel, faPassport, faPlaneDeparture, faShip, faShoppingCart, faTaxi } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import React from 'react'

function SecondNav(){
return(
    <div>
         <nav className='navbar-expand-lg navbar-light bg2 shadow   '>
                <ul className='nav'>
                  <li className='nav-item'>
                    <Link to='/' className='nav-link'>
                      <FontAwesomeIcon className='menuicon' icon={faHotel} />
                      Accommodation
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/Taxishome/' className='nav-link'>
                      <FontAwesomeIcon className='menuicon' icon={faTaxi} />
                      Taxis
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/flight/' className='nav-link'>
                      <FontAwesomeIcon
                        className='menuicon'
                        icon={faPlaneDeparture}
                      />
                      Flight
                    </Link>
                  </li>

                  <li className='nav-item '>
                    <span
                      to='/Airportshuttle/'
                      className='nav-link dropdown-toggle'
                      id='dropdownMenuButton'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      <FontAwesomeIcon className='menuicon' icon={faShip} />
                      Things to do
                    </span>
                    <div
                      class='dropdown-menu'
                      aria-labelledby='dropdownMenuButton'
                    >
                      <Link class='dropdown-item'>Experiences</Link>
                      <Link class='dropdown-item'>Tours</Link>
                      <Link class='dropdown-item'>Show/Events</Link>
                      <Link class='dropdown-item'>Attractions</Link>
                    </div>
                  </li>

                  <li className='nav-item'>
                    <Link to='/flight/' className='nav-link'>
                      <FontAwesomeIcon className='menuicon' icon={faPassport} />
                      Travel Visa
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/shop' className='nav-link'>
                      <FontAwesomeIcon
                        className='menuicon'
                        icon={faShoppingCart}
                      />
                      Shop
                    </Link>
                  </li>
                </ul>
              </nav>
    </div>
)

}
export default SecondNav