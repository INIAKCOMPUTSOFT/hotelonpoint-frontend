//eslint disable sort import

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

import {  Router, } from "react-router-dom";
import { getUser, logoutUser } from './redux/actions/userActions';
import Footer from "./components/Footer/footer";
import Navbar from "./components/Navbar/navbar";
import React from "react";
import history from './history';
import jwtDecode from "jwt-decode";
import store from "./redux/store";
import Language from './language'
import { SET_AUTHENTICATED } from './redux/type';
import axios from "axios";

function route() {
  const token = localStorage.JWT_TOKEN;
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < new Date()) {
        store.dispatch(logoutUser);
        history.push("/");
      } else {
        store.dispatch({ type: SET_AUTHENTICATED });
        axios.defaults.headers.common["Authorization"] = token;
        store.dispatch(getUser());
      }
    }
  return (
      <Router history={history}>
        <Navbar />
        <div>
         <Language />
        </div>
        <Footer />
      </Router>
  );
}

export default route;
