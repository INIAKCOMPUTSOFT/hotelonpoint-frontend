import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

import { Route, Router } from "react-router-dom";
import { getUser, logoutUser } from './redux/actions/userActions';

import Blogapi from "./components/Multiblog/blogapi";
import Date from "./components/data/Dates";
import Footer from "./components/Footer/footer";
import HotelHome from "./pages/Hotelpages/Accomodation";
import Hsignup from "./pages/Hsignup/Hsignup";
import Login from "./pages/login";
import MultiListing from "./pages/Hotelpages/multilisting";
import Navbar from "./components/Navbar/navbar";
import { Provider } from "react-redux";
import React from "react";
import { SET_AUTHENTICATED } from './redux/type';
import Signup from "./pages/signup/signup";
import Singleblog from "./pages/Blogpages/singleblog";
import axios from "axios";
import history from './history';
import jwtDecode from "jwt-decode";
import store from "./redux/store";

//import logo from './logo.svg';
//import Api3 from './components/api3'
//import Blogap from './components/blogapi'
//import { render } from 'react-dom'

//import Login from './pages/login/index'

function App() {
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
    <Provider store={store}>
      <Router history={history}>
        <Navbar />
        <Route exact path="/blogapi" component={Blogapi} />
        <Route
          exact
          path="/pages/Blogpages/singleblog:blog"
          component={Singleblog}
        />
        <Route exact path="/" component={HotelHome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path='/Uploadhotel' component={Hsignup} />
        <Route exact path="/multilisting" component={MultiListing} />
        <Route exact path="/date" component={Date} />
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
