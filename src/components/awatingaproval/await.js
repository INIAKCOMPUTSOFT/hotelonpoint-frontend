import React from "react";
import axios from "axios";

class AwaitAproval extends React.Component {
  constructor() {
    super();
    this.state = {
      hotel: []
    };
  }

  componentDidMount() {
      const token = localStorage.getItem('JWT_TOKEN')
      axios.defaults.headers.common['Authorization'] = token;
    axios.get("http://localhost:3400/hotel/me").then(res => {
        this.setState({hotel: res.data.unApproved.unApproved})
    });
  }

  render() {
    const { hotel } = this.state;
    // console.log(hotel[0])
    return (
      hotel[0] ? (
        hotel.map(res => (
            res.imagerUrl ? (
                <div className="card mb-3" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={res.imagerUrl[0].url}
                  width="50"
                  height="150"
                  alt="Card cap"
                />
                <div className="card-body">
              <h5 className="card-text text-center">{res.propertyInfo.hotelName}</h5>
                  <p className="card-text text-danger text-center">Awaiting Approval</p>
                </div>
              </div>
              ) : null
          ))
      ) : null
    );
  }
}

export default AwaitAproval;
