import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

import { Route, BrowserRouter as Router } from 'react-router-dom';

import Blogapi from './components/Multiblog/blogapi';
import Date from './components/data/Dates';
import Footer from './components/Footer/footer';
import HotelHome from './pages/Hotelpages/Accomodation';
import Login from './pages/login';
import MultiListing from './pages/Hotelpages/multilisting';
import Navbar from './components/Navbar/navbar';
import React from 'react';
import Signup from './pages/signup/signup';
import Singleblog from './pages/Blogpages/singleblog';

//import logo from './logo.svg';
//import Api3 from './components/api3'
//import Blogap from './components/blogapi'
//import { render } from 'react-dom'

//import Login from './pages/login/index'













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
    <Route exact path='/date' component={Date} />
    <Footer />
    </Router>
  );
}

export default App;
