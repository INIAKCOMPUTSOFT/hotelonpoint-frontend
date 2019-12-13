//eslint disable sort import
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import jwtDecode from "jwt-decode";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import "./App.css";
import BlogForm from './components/blogForm/blogform';
import Footer from "./components/Footer/footer";
import Blogapi from "./components/Multiblog/blogapi";
import Navbar from "./components/Navbar/navbar";
import history from './history';
import Singleblog from "./pages/Blogpages/singleblog";
import CheckAuth from './pages/checkAuth';
import HotelHome from "./pages/Hotelpages/Accomodation";
import MultiListing from "./pages/Hotelpages/multilisting";
import Hsignup from "./pages/Hsignup/Hsignup";
import Login from "./pages/login";
import Signup from "./pages/signup/signup";
import { getUser, logoutUser } from './redux/actions/userActions';
import store from "./redux/store";
import { SET_AUTHENTICATED } from './redux/type';



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
          <Switch>
              <Route exact path="/blogapi" component={Blogapi} />
              <Route
                exact
                path="/pages/Blogpages/singleblog:blog"
                component={Singleblog}
              />
              <Route exact path="/" component={HotelHome} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <CheckAuth exact path='/Uploadhotel' component={Hsignup} />
              <CheckAuth exact path="/blogform" component={BlogForm} />
              <Route exact path="/multilisting" component={MultiListing} />
          </Switch>
        </div>
        <Footer />
      </Router>
  );
}

export default route;
