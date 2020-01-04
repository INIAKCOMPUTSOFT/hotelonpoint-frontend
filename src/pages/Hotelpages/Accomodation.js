import "./acc.css";

import React, { lazy } from "react";

import Advert from "../../components/HomeAd/advercard";
import Background from "../../components/background/background";
import HomeBlog from "../../components/BlogonHome/homeblog";
import HotelLocationDisplay from "../../components/Location/location";
import { connect } from 'react-redux';

const  AwaitAproval = lazy(() => import("../../components/awatingaproval/await"));

//import {Link} from 'react-router-dom'

//import LocationBar from './locationbar'

//import HomeAdvert from '../../components/homeadvert'
//import Subscription from './subscription'

function HotelHome({ user: { authenticated } }) {
  return (
    <div>
      <suspense fallBack={<h1>loading...</h1>}>
      <Background />
      <div className="container content">
        {authenticated && <AwaitAproval />}
        <Advert />
        {/* <HomeHotelDisplay/> */}
        <HomeBlog />
        <HotelLocationDisplay />
      </div>
      </suspense>
    </div>
  );
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(HotelHome);
