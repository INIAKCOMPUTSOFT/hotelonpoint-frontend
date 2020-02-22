//import HotelLocationDisplay from "../../components/Location/location";

import "./acc.css";

import Advert from "../../components/HomeAd/advercard";
import AwaitAproval from "../../components/awatingaproval/await";
import Background from "../../components/background/background";
import CardCarrier from "../../components/cardshadow/cardcarrier";
import HomeBlog from "../../components/BlogonHome/homeblog";
import HomeHotelDisplay from '../../components/HomepageHotels/Homehoteldisplay';
import React from "react";
import SecondNav from "../../components/Navbar/downnav";
import { connect } from 'react-redux';

//import {Link} from 'react-router-dom'
//import LocationBar from './locationbar'





//import HomeAdvert from '../../components/homeadvert'
//import Subscription from './subscription'

function HotelHome({ user: { authenticated } }) {
  return (
    <div> 
      <SecondNav />
      <Background />
      <div className="container content">
        {authenticated && <AwaitAproval />}
        <Advert />
         <HomeHotelDisplay/> 
        
        {/* <HotelLocationDisplay /> */}
        {/* <CardCarrier h2="Recommended Hotels"/> */}
        <CardCarrier h2="Popular Attractions"/>
        <CardCarrier h2="Recommended Taxis"/>  
        <CardCarrier h2="Item Recommended For You"/>  
        {/* <HomeBlog /> */}
      </div>
    </div>
  );
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(HotelHome);
