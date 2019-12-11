import './nav.css';

import { faCcVisa, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faHotel, faPlaneDeparture, faShip, faTaxi } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../../logo/logo.svg';

function Navbar(){
return(
  <div>
  <nav class="navbar navbar-expand-lg navbar-light">
  <a className='navbar-brand'><img src={logo} width="45" alt=""/></a>
  <button class="navbar-toggler "  type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon bg-light"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
   
  <ul className="navbar-nav ml-auto">

  <li className="number  mr-1">
  <div className="btn-group mr-1 btn-group-sm" role="group" aria-label="Button group with nested dropdown">
                        
                         <div className="btn-group" role="group">
                          <button id="btnGroupDrop2" type="button" className="botin dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Talk to us
                          </button>
                        
                           
                          <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <Link to='/language/' className="dropdown-item">
                              <FontAwesomeIcon className="wicon" icon={faWhatsapp} /> 08028967884</Link>
                          </div>
                        </div>
                        </div> 
                      </li>

                      <li className="nav-item mr-1">
                <div className="btn-group mr-1 btn-group-sm" role="group" aria-label="Button group with nested dropdown">                                                                                    
                         <div className="btn-group" role="group">
                          <button id="btnGroupDrop1" type="button" className="botin dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                EN
                          </button>
                        
                           
                          <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                            <Link to='/language/' className="dropdown-item">testing</Link>
                          </div>
                          <button type="button" className="botin">NGN</button>
                        </div> 
                      </div>
                      </li>
            
          <li className="nav-item mr-1">
                <Link to='/Uploadhotel/'>
                  <button className="botin">
                        Add your property
                    </button>
                </Link>
          </li>
          <li className="nav-item mr-1">
                <Link to='/Signup/'><button className="botin">
                        Sign up       
                </button></Link>
          </li>
          <li className="nav-item mr-1">
              <Link to='/Login/'><button className="botin">
                  Login
              </button></Link>
          </li>
      </ul>
  </div>
</nav>

<nav className="navbar-expand-lg navbar-light bg2 shadow   ">
  
   
      <ul className="nav">
        <li className="nav-item">    
          <Link to='/' className="nav-link">
          <FontAwesomeIcon className="menuicon" icon={faHotel} />
            Acommodation
            </Link>
        </li>
        <li className="nav-item">
          <Link to='/Taxishome/' className="nav-link">
          <FontAwesomeIcon className="menuicon" icon={faTaxi} />
            Taxis
            </Link>
        </li>
        <li className="nav-item">
            <Link to='/Airportshuttle/' className="nav-link">
            <FontAwesomeIcon className="menuicon" icon={faShip} />
              Tours&Ticket
              </Link>
        </li>
        <li className="nav-item">
          <Link to='/flight/' className="nav-link">
          <FontAwesomeIcon className="menuicon" icon={faPlaneDeparture} />
            Flight
            </Link>
        </li>

        <li className="nav-item">
          <Link to='/flight/' className="nav-link">
          <FontAwesomeIcon className="menuicon" icon={faCcVisa} />Visa
            </Link>
        </li>
        <li className="nav-item">
          <Link to='/Attraction' className="nav-link">
          Attractions
            </Link>
        </li>
      </ul> 
    </nav>
  </div>



)
}


export default Navbar