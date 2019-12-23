import React from "react";
import { connect } from "react-redux";
import AwaitAproval from "../../components/awatingaproval/await";
import Background from "../../components/background/background";
import HomeBlog from "../../components/BlogonHome/homeblog";
import Advert from "../../components/HomeAd/advercard";
import HotelLocationDisplay from "../../components/Location/location";
import "./acc.css";

//import {Link} from 'react-router-dom'

//import LocationBar from './locationbar'

//import HomeAdvert from '../../components/homeadvert'
//import Subscription from './subscription'

function HotelHome({ user: { authenticated } }) {
  return (
    <div>
      <Background />
      <div className="container content">
        {authenticated && <AwaitAproval />}
        <Advert />
        {/* <HomeHotelDisplay/> */}
        <HomeBlog />
        <HotelLocationDisplay />
      </div>
    </div>
  );
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(HotelHome);
