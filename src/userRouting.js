// //eslint disable sort import

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import "./App.css";

// import { getUser, logoutUser } from './redux/actions/userActions';

// import Footer from "./components/Footer/footer";
//import UserNavbar from "./components/userDashoard/usernav/usernav";
// import React from "react";
// import { Router } from "react-router-dom";
// import { SET_AUTHENTICATED } from './redux/type';
// import UserRoute from "./userroute";
// import axios from "axios";
// import history from './history';
// import jwtDecode from "jwt-decode";
// import store from "./redux/store";

// function UserRouting() {
//   const token = localStorage.JWT_TOKEN;
//     if (token) {
//       const decodedToken = jwtDecode(token);
//       if (decodedToken.exp * 1000 < new Date()) {
//         store.dispatch(logoutUser);
//         history.push("/");
//       } else {
//         store.dispatch({ type: SET_AUTHENTICATED });
//         axios.defaults.headers.common["Authorization"] = token;
//         store.dispatch(getUser());
//       }
//     }
//   return (
//       <Router history={history}>
//         <UserNavbar />
//         <div className="container">
//          <UserRoute/>
//         </div>
//         <Footer />
//       </Router>
//   );
// }

// export default UserRouting;
