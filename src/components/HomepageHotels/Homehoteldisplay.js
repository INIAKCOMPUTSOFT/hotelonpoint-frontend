import "./homehotels.css";

import React, { Component } from "react";

import CardCarrier from "../../components/cardshadow/cardcarrier";
import Swiper from "react-id-swiper";

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

    if(stars == "1"){
      return(<> one stars</>)
    }else    
    if(stars == "2"){
      return(<> two stars </>)
    }else 
    if(stars == "3"){
      return(<> three stars</>)
    }else 
    if(stars == "4"){
      return(<>four stars </>)
    }else 
    if(stars == "5"){
      return(<>five stars </>)
    }else{
      return(<> no stars </>)
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
                  <img src={hotel.imagerUrl[0].url} style={{backgroundColor:"gainsboro", height: "75%",width:'100%'}} alt="" />
                  <div className="card-body p-0">
                  <h5>{hotel.propertyInfo.hotelName}</h5>
                  <span>{this.Ratingstarts(hotel.propertyInfo.starRating)}</span>
                  <br/>
                  <span className="card-text">From NGN{hotel.averagePrice} </span>
                  </div>
                </div>
              ))}
              </Swiper>
              </div>

              <div className="scrolling-wrapper d-lg-none d-xl-none ">
              {reverse.map((hotel, i) => (
                <div className="card rounded-bottom border-0 p-0" key={i} style={{width: "18rem"}}>
                  
                  <div className="card-body">
                   <img src={hotel.imagerUrl[0].url} style={{backgroundColor:"gainsboro", height: "10rem", width:'100%'}} alt="" />
                  
                  <h5>{hotel.propertyInfo.hotelName}</h5>
              <p className="card-text">Located at {this.state.loading ? <p>waiting for location</p> : <p>{hotel.propertyInfo.city}</p>} </p>
                  </div>
                </div>
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
