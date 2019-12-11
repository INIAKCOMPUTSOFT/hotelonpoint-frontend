import './acc.css'

import Advert from '../../components/HomeAd/advercard'
import Background from '../../components/background/background'
import HomeBlog from '../../components/BlogonHome/homeblog'
import HomeHotelDisplay from '../../components/HomepageHotels/Homehoteldisplay'
import HotelLocationDisplay from '../../components/Location/location'
import React from 'react'

//import {Link} from 'react-router-dom'

//import LocationBar from './locationbar'


//import HomeAdvert from '../../components/homeadvert'
//import Subscription from './subscription'



function HotelHome (){


return(
<div>
<Background />
<div className="container content">
<Advert />
<HomeHotelDisplay/>
<HomeBlog/>
<HotelLocationDisplay/>
</div>
</div>
)
}


export default HotelHome