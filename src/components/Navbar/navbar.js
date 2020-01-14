import "./nav.css";

import React, { Component } from "react";
import { faCcVisa, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faHotel, faPlaneDeparture, faShip, faShoppingCart, faTaxi, faBars } from "@fortawesome/free-solid-svg-icons";
import { getUser, logoutUser } from "../../redux/actions/userActions";
import ProfileData from '../dropdown/dropdown'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import history from "../../history";
import logo from "../../logo/HOP.svg";

// npm install --save-dev @iconify/react @iconify/icons-fa-solid
// import { Icon, InlineIcon } from '@iconify/react';
// import atlasIcon from '@iconify/icons-fa-solid/atlas';

class Navbar extends Component {
  // componentDidMount() {
  //   this.props.getUser()
  // }

  signout = () => {
    this.props.logoutUser(history);
  };

  render() {
    const {
      user: { authenticated, userData }
    } = this.props;
    return (
      <div>
        <div>
          {authenticated ? (
            <div>
              <nav className="navbar navbar-expand-lg navbar-light">
                <Link to="/">
                  <span className="navbar-brand">
                    <img src={logo} width="200" alt="" />
                  </span>
                </Link>
                <button
                  className="navbar-toggler border-0 "
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarTogglerDemo01"
                  aria-controls="navbarTogglerDemo01"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span>
                  <FontAwesomeIcon icon={faBars} style={{color:"white"}} />
                    </span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarTogglerDemo01"
                >
                  <ul className="navbar-nav ml-auto mt-2">
                    <li className="number  mr-1">
                      <div
                        className="btn-group mr-1 btn-group-sm"
                        role="group"
                        aria-label="Button group with nested dropdown"
                      >
                        <div className="btn-group" role="group">
                          <button
                            id="btnGroupDrop2"
                            type="button"
                            className="botin dropdown-toggle"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Talk to us
                          </button>

                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenu2"
                          >
                            <Link to="/language/" className="dropdown-item">
                              <FontAwesomeIcon
                                className="wicon"
                                icon={faWhatsapp}
                              />{" "}
                              08028967884
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item mr-1">
                      <div
                        className="btn-group mr-1 btn-group-sm"
                        role="group"
                        aria-label="Button group with nested dropdown"
                      >
                        <div className="btn-group" role="group">
                          <button
                            id="btnGroupDrop1"
                            type="button"
                            className="botin dropdown-toggle"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            EN
                          </button>

                          <div
                            className="dropdown-menu"
                            aria-labelledby="btnGroupDrop1"
                          >
                            <Link to="/language/" className="dropdown-item">
                              testing
                            </Link>
                          </div>
                          <button type="button" className="botin">
                            NGN
                          </button>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item mr-1">
                      <Link to="/listproperty">
                        <button className="botin">Add your property</button>
                      </Link>
                    </li>
                    {userData && (
                      <li className="nav-item mr-1">
                       <ProfileData
                         imageurl={userData.imageUrl}
                         fullname={userData.fullName}
                       />
                      </li>
                    )}
                    <li className="nav-item mr-1">
                      <button className="botin" onClick={this.signout}>
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </nav>

              <nav className="navbar-expand-lg navbar-light bg2 shadow   ">
                <ul className="nav">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      <FontAwesomeIcon className="menuicon" icon={faHotel} />
                      Acommodation
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Taxishome/" className="nav-link">
                      <FontAwesomeIcon className="menuicon" icon={faTaxi} />
                      Taxis
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/flight/" className="nav-link">
                      <FontAwesomeIcon
                        className="menuicon"
                        icon={faPlaneDeparture}
                      />
                      Flight
                    </Link>
                  </li>

                  <li className="nav-item ">
                    <span
                      to="/Airportshuttle/"
                      className="nav-link dropdown-toggle"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <FontAwesomeIcon className="menuicon" icon={faShip} />
                      Things to do
                    </span>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <Link class="dropdown-item">Experiences</Link>
                      <Link class="dropdown-item">Tours</Link>
                      <Link class="dropdown-item">Show/Events</Link>
                      <Link class="dropdown-item">Attractions</Link>
                    </div>
                  </li>

                  <li className="nav-item">
                    <Link to="/flight/" className="nav-link">
                      <FontAwesomeIcon className="menuicon" icon={faCcVisa} />
                      Travel Visa
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/shop" className="nav-link">
                      <FontAwesomeIcon
                        className="menuicon"
                        icon={faShoppingCart}
                      />
                      Shop
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          ) : (
            <div>
              <nav className="navbar navbar-expand-lg navbar-light">
                <Link to="/">
                  <span className="navbar-brand">
                    <img src={logo} width="200" alt="" />
                  </span>
                </Link>
                <button
                  className="navbar-toggler border-0 "
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarTogglerDemo01"
                  aria-controls="navbarTogglerDemo01"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span>
                  <FontAwesomeIcon icon={faBars} style={{color:"white"}} />
                    </span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarTogglerDemo01"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="number  mr-1">
                      <div
                        className="btn-group mr-1 btn-group-sm"
                        role="group"
                        aria-label="Button group with nested dropdown"
                      >
                        <div className="btn-group" role="group">
                          <button
                            id="btnGroupDrop2"
                            type="button"
                            className="botin dropdown-toggle"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Talk to us
                          </button>

                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenu2"
                          >
                            <Link to="/language/" className="dropdown-item">
                              <FontAwesomeIcon
                                className="wicon"
                                icon={faWhatsapp}
                              />{" "}
                              08028967884
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="nav-item mr-1">
                      <div
                        className="btn-group mr-1 btn-group-sm"
                        role="group"
                        aria-label="Button group with nested dropdown"
                      >
                        <div className="btn-group" role="group">
                          <button
                            id="btnGroupDrop1"
                            type="button"
                            className="botin dropdown-toggle"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            EN
                          </button>

                          <div
                            className="dropdown-menu"
                            aria-labelledby="btnGroupDrop1"
                          >
                            <Link to="/language" className="dropdown-item">
                              testing
                            </Link>
                          </div>
                          <button type="button" className="botin">
                            NGN
                          </button>
                        </div>
                      </div>
                    </li>

                    <li className="nav-item mr-1">
                      <Link to="/login">
                        <button className="botin">Add your property</button>
                      </Link>
                    </li>
                    <li className="nav-item mr-1">
                      <Link to="/signup">
                        <button className="botin">Sign up</button>
                      </Link>
                    </li>
                    <li className="nav-item mr-1">
                      <Link to="/login">
                        <button className="botin">Login</button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>

              <nav className="navbar-expand-lg navbar-light bg2 shadow   ">
                <ul className="nav">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      <FontAwesomeIcon className="menuicon" icon={faHotel} />
                      Acommodation
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Taxishome/" className="nav-link">
                      <FontAwesomeIcon className="menuicon" icon={faTaxi} />
                      Taxis
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/flight/" className="nav-link">
                      <FontAwesomeIcon
                        className="menuicon"
                        icon={faPlaneDeparture}
                      />
                      Flight
                    </Link>
                  </li>

                  <li className="nav-item ">
                    <span
                      to="/Airportshuttle/"
                      className="nav-link dropdown-toggle"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <FontAwesomeIcon className="menuicon" icon={faShip} />
                      Things to do
                    </span>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <Link class="dropdown-item">Experiences</Link>
                      <Link class="dropdown-item">Tours</Link>
                      <Link class="dropdown-item">Show/Events</Link>
                      <Link class="dropdown-item">Attractions</Link>
                    </div>
                  </li>

                  <li className="nav-item">
                    <Link to="/flight/" className="nav-link">
                      <FontAwesomeIcon className="menuicon" icon={faCcVisa} />
                      Travel Visa
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/shop" className="nav-link">
                      <FontAwesomeIcon
                        className="menuicon"
                        icon={faShoppingCart}
                      />
                      Shop
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
        {/* {this.props.children} */}
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });
const mapActionToProps = {
  logoutUser,
  getUser
};

export default connect(mapStateToProps, mapActionToProps)(Navbar);
