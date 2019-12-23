import React, { Component } from "react";

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
    console.log(this.state.hotels[0])
    const reverse=this.state.hotels.reverse();
    return (
      <div>
        {this.state.loading ? (
          <div
            className="spinner-border text-success text-center"
            role="status"
          >
            <span className="sr-only ">Loading...</span>
          </div>
        ) : this.state.hotels[0] ? (
          <div className="mb-3">
            <h4>
              More than just hotels… discover pure comfort with homes &
              apartments
            </h4>
            <div className="card-deck mb-3">
              {reverse.slice(0, 4).map((hotel, i) => (
                <div className="card rounded-bottom" key={i}>
                  
                  <div className="card-body">
                  <h5>{hotel.property.propName}</h5>
                    <p className="card-text">Located at {hotel.location.city} </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default HomeHotelDisplay;
