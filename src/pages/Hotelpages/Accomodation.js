import React from 'react'
import HomeHotelDisplay from '../../components/HomepageHotels/Homehoteldisplay'
import SearchBar from '../../components/SearchBar/searchbar'
//import {Link} from 'react-router-dom'
import HomeBlog from '../../components/BlogonHome/homeblog'
//import HomeAdvert from '../../components/homeadvert'
//import Subscription from './subscription'
import HotelLocationDisplay from '../../components/Location/location'
//import LocationBar from './locationbar'
import Advert from '../../components/HomeAd/advercard'


function HotelHome (){


return(

<div className="container">
<SearchBar />
<Advert />
<HomeHotelDisplay/>
<HomeBlog/>
<HotelLocationDisplay/>



</div>

)
}


export default HotelHome