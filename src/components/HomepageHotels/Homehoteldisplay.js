import React, { Component } from "react";

import CardCarrier from "../../components/cardshadow/cardcarrier";

class HomeHotelDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      hotels: [],
      hotelpics: []
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

  render() {
    console.log(this.state.hotels, 'HOTELS ON PAGE')
    const reverse=this.state.hotels.reverse();
    return (
      <div>
         {this.state.loading ? (
         <CardCarrier h2="Recommended Hotels"/>
        ) : this.state.hotels ? (
          
          <div className="mb-3">
            <h2 className="text-center">Recommended Hotels</h2>
            
            <div className="card-deck mb-3">
              {reverse.slice(0, 4).map((hotel, i) => (
                <div className="card rounded-bottom border-0 p-0" key={i} style={{width: "18rem"}}>
                  
                  <div className="card-body">
                   <img src={hotel.imagerUrl[0].url} style={{backgroundColor:"gainsboro", height: "10rem"}} alt="" />
                  
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
