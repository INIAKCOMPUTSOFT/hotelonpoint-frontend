import "./homehotels.css";

import React, { Component } from "react";

import CardCarrier from "../../components/cardshadow/cardcarrier";
import Swiper from "react-id-swiper";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

class HomeHotelDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      hotels: [],
      hotelpics: [],
      forward:false,
      backward:false,
    };
  }

  async componentDidMount() {
    const url = "https://calm-anchorage-14244.herokuapp.com/hotel";

    const response = await fetch(url, {
      methods: "GET",
      headers: {
        "Content-type": "Application/json"
      }
    });
    const data = await response.json();
    this.setState({ hotels: data.data, loading : false });
    console.log(data.data[0].property)
  }

  Ratingstarts=(stars)=>{

    if(stars.includes("1")){
      return(<>  <FontAwesomeIcon className='starrating'  icon={faStar} /> </>)
    }else    
    if(stars.includes("2")){
      return(<> 
      <FontAwesomeIcon className='starrating'  icon={faStar} /> 
      <FontAwesomeIcon className='starrating'  icon={faStar} /> 
      
       </>)
    }else 
    if(stars.includes("3")){
      return(<> 
      <FontAwesomeIcon className='starrating'  icon={faStar} /> 
      <FontAwesomeIcon className='starrating'  icon={faStar} /> 
      <FontAwesomeIcon className='starrating'  icon={faStar} /> 
      </>)
    }else 
    if(stars.includes("4")){
      return(<>
      <FontAwesomeIcon className='starrating'  icon={faStar} /> 
      <FontAwesomeIcon className='starrating'  icon={faStar} /> 
      <FontAwesomeIcon className='starrating'  icon={faStar} /> 
      <FontAwesomeIcon className='starrating'  icon={faStar} />  
      </>)
    }else 
    if(stars.includes("5")){
      return(<>
      <FontAwesomeIcon className='starrating'  icon={faStar} /> 
      <FontAwesomeIcon className='starrating'  icon={faStar} /> 
      <FontAwesomeIcon className='starrating'  icon={faStar} /> 
      <FontAwesomeIcon className='starrating'  icon={faStar} /> 
      <FontAwesomeIcon className='starrating'  icon={faStar} /> 
      </>)
    }else{
      return(<> </>)
    }
  }

  boxRatingstarts=(stars)=>{

    if(stars.includes("1")){
      return(<> <span className="veiw">1.5/5</span></>)
    }else    
    if(stars.includes("2")){
      return(<> <span className="veiw">2.5/5</span></>)
    }else 
    if(stars.includes("3")){
      return(<> <span className="veiw">3.7/5</span></>)
    }else 
    if(stars.includes("4")){
      return(<><span className="veiw">4.5/5</span></>)
    }else 
    if(stars.includes("5")){
      return(<><span className="veiw">5/5</span> </>)
    }else{
      return(<></>)
    }
  }

  render() {
    const params = {
      slidesPerView: 6,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true
      // }
    };
  
    console.log(this.state.hotels, 'HOTELS ON PAGE')
    const reverse=this.state.hotels.reverse();
    return (
      <div>
         {this.state.loading ? (
         <CardCarrier h2="Recommended Hotels"/>
        ) : this.state.hotels ? (
          
          <div className="mb-3">
            <h2 className="text-center">Recommended Hotels</h2>
            <div className="d-none d-lg-block">
            <Swiper {...params}>
              {reverse.map((hotel, i) => (                
                <div className="card rounded-bottom border-0" key={i} style={{width: "194px",height: "300px"}}>
                  <Link to={`/singlehotel/${hotel._id}`}  style={{margin:'0', border:'none', color:'black', textDecoration:"none"}} >
                  <img src={hotel.imagerUrl[0].url} style={{backgroundColor:"gainsboro", height: "75%",width:'100%'}} alt="" />
                  <div className="card-body p-0">
                  <h5>{hotel.propertyInfo.hotelName}</h5>
                  <span>{this.Ratingstarts(hotel.propertyInfo.starRating)}</span>
                  <br/>
                  <span className="card-text">From NGN{hotel.averagePrice} </span>
                  </div>
                  </Link>
                </div>
                
              ))}
              
              </Swiper>
              </div>

              <div className="scrolling-wrapper d-lg-none d-xl-none ">
              {reverse.map((hotel, i) => (
                <Link to={`/singlehotel/${hotel._id}`}  style={{margin:'0', border:'none', color:'black', textDecoration:"none"}} >
                <div className="card rounded-bottom border-0 mr-2" key={i} style={{width: "194px",height: "300px"}}>
                  
                  <img src={hotel.imagerUrl[0].url} style={{backgroundColor:"gainsboro", height: "75%",width:'100%'}} alt="" />
                  <div className="card-body p-0">
                  <h5>{hotel.propertyInfo.hotelName}</h5>
                  <span>{this.Ratingstarts(hotel.propertyInfo.starRating)}</span>
                  <br/>
                  {this.boxRatingstarts(hotel.propertyInfo.starRating)}
                  <br/>
                  <span className="card-text">From NGN{hotel.averagePrice} </span>
                  </div>
                </div>
                </Link>
              ))}
              </div>
              
          </div>
        ) : (
          <CardCarrier h2="Recommended Hotels"/>
        )}  
      </div>
    );
  }
}

export default HomeHotelDisplay;
