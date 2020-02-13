import Axios from "axios";
import React from "react";

class Booking extends React.Component {
  constructor() {
    super();
    this.state = {
      Buking: [],
      loading: true
    };
  }

  componentDidMount() {
    Axios.get(`http://localhost:3400/booking/userall`)
      .then(result => {
        console.log("result", result);
        this.setState({ Buking: result.data.data.bookings, loading: false });
      })
      .catch(err => {
        console.log(err, "error");
      });
  }

  // canclebook=()=>{

  // }

  render() {
    const booking = this.state.Buking;
    console.log(booking, "booking");
    return booking.length >= 1 ? (
      booking.map((books, i) => (
        <div className="card">
          <div className="row no-guttters mb-1">
            <div class="col-md-4">
              <h4>{books.hotelName}</h4>
            </div>
            <div class="col-md-4">
              <p>
                <b>Room Type: {books.roomType}</b>
              </p>
              <p>
                <b>Amount of Room: {books.amount}</b>
              </p>
              <p>
                <b>Check in Date: {books.checkIn}</b>
              </p>
              <p>
                <b>check out Date: {books.checkOut}</b>
              </p>
            </div>
            <div class="col-md-4">
              <button className="btn btn-primary" onClick={this.canclebook}>
                {" "}
                Cancle booking{" "}
              </button>
            </div>
          </div>
        </div>
      ))
    ) : (
      <div className="card">
        <p>No booking found yet</p>
      </div>
    );
  }
}

export default Booking;
