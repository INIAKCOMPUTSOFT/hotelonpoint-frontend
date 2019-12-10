import React from 'react';
//import logo from './logo.svg';
//import Api3 from './components/api3'
//import Blogap from './components/blogapi'
//import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Singleblog from './pages/Blogpages/singleblog'
import Blogapi from './components/Multiblog/blogapi'
import Navbar from './components/Navbar/navbar'
import HotelHome from './pages/Hotelpages/Accomodation'
import Footer from './components/Footer/footer'
//import Login from './pages/login/index'

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery'
import Login from './pages/login';
import Signup from './pages/signup/signup';
import MultiListing from './pages/Hotelpages/multilisting' 



function App() {
  return (

    <Router>
    <Navbar />
    <Route exact path='/blogapi' component={Blogapi}/>
    <Route exact path='/pages/Blogpages/singleblog:blog' component={Singleblog}/>
    <Route exact path='/' component={HotelHome}/>
    <Route exact path='/login' component={Login} />
    <Route exact path='/signup' component={Signup} />
    <Route exact path='/multilisting' component={MultiListing} />
    <Footer />
    </Router>
  );
}

export default App;
