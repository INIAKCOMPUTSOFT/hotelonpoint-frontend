import Axios from "axios";
import React from "react";
import "./bookings.css"
class Booking extends React.Component {
  constructor() {
    super();
    this.state = {
      Buking: [],
      hotelinfo:[],
      showModal: false,
      loading: true,
      checkin:true,
      checkout:true,
      canclebook:true,
      remark: "",
      rating:0,
    };
  }

  componentDidMount() {
    Axios.get(`https://calm-anchorage-14244.herokuapp.com/booking/userall`)
      .then(result => {
        console.log("result", result);
        this.setState({ Buking: result.data.data.bookings,  loading: false });
      })
      .catch(err => {
        console.log(err, "error");
      });
  }

  checkin=(bookingid)=>{
    //this.setState({checkin:true})
    // const data = {
    //   checkin:this.state.checkin
    // }
setTimeout(()=> {window.location.href="/bookings"})
    const data = [
      {
        propName: 'checkInStatus',
        value: this.state.checkin
      }
    ]
    Axios
    .put(`https://calm-anchorage-14244.herokuapp.com/booking/user/${bookingid}`, data)
  }


checkout=(bookingid)=>{
      
  this.setState({ showModal:true});

  const data = [
    {
      propName: 'checkOutStatus',
      value: this.state.checkout
    }
  ]

  Axios
    .put(`https://calm-anchorage-14244.herokuapp.com/booking/user/${bookingid}`, data)
    .then(res=>{ console.log(res)})

    setTimeout(()=> {window.location.href="/bookings"})
}

   canclebooking=(bookingid)=>{
     //this.setState({cancelbook:true})
    const data = {
      propName:'cancellationStatus',
      value:this.state.cancelbook
    }
    Axios
    .put(`https://calm-anchorage-14244.herokuapp.com/booking/user/${bookingid}`, data)
    .then(res=>{ console.log(res, 'cancel ref')})

    setTimeout(()=> {window.location.href="/bookings"})
   }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleStarRating1 = e => {
    this.setState({ rating: 1 });
  };

  handleStarRating2 = e => {
    this.setState({ rating: 2 });
  };
  handleStarRating3 = e => {
    this.setState({ rating: 3 });
  };
  handleStarRating4 = e => {
    this.setState({ rating: 4 });
  };
  handleStarRating5 = e => {
    this.setState({ rating: 5 });
  };
  handleChange=(event)=> {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({[name]: value });
    console.log(this.state.remark,'remark');
  }

  Rateit=(hotelid)=> {
    const data = {
      remark :this.state.remark,
      rating:this.state.rating
    }
    console.log(hotelid)
    Axios
    .put(`https://calm-anchorage-14244.herokuapp.com/review/${hotelid}`, data)
    .then(res=>{ console.log(res)})
    //console.log(this.state);
  }


  render() {
    const booking = this.state.Buking;
    console.log(booking, "booking");

    const { loading, rating, showModal } = this.state;

    let star1, star2, star3, star4, star5;

    if (rating >= 1) {
      star1 = {
        color: "#f8ce0b",
        cursor: "pointer"
      };
    } else
      star1 = {
        color: "#7e7878",
        cursor: "pointer"
      };

    if (rating >= 2) {
      star2 = {
        color: "#f8ce0b",
        cursor: "pointer"
      };
    } else
      star2 = {
        color: "#7e7878",
        cursor: "pointer"
      };

    if (rating >= 3) {
      star3 = {
        color: "#f8ce0b",
        cursor: "pointer"
      };
    } else
      star3 = {
        color: "#7e7878",
        cursor: "pointer"
      };
    if (rating >= 4) {
      star4 = {
        color: "#f8ce0b",
        cursor: "pointer"
      };
    } else
      star4 = {
        color: "#7e7878",
        cursor: "pointer"
      };

    if (rating >= 5) {
      star5 = {
        color: "#f8ce0b",
        cursor: "pointer"
      };
    } else
      star5 = {
        color: "#7e7878",
        cursor: "pointer"
      };
    console.log("state values", this.state);


    return(
          
<>

      { booking.length >= 1 ? (
      booking.map((books, i) => (
        <>
{this.state.showModal === false ? 
<>
</>
:
<>
<div className="booking-div">
<div className={showModal ? "modal-container" : "close-modal"}>
  <div className="modal-inner">
    <h5>Hi, Give a review of the Hotel</h5>

    <textarea
      type="text"
      name="remark"
      value={this.state.remark}
      className="remark"
      placeholder="Leave a remark"
      onChange={this.handleChange}
    ></textarea>

    <div className="star-div">
      <p className="mb-1 mt-2">Rate Us</p>
      <i
        className="fas fa-star star"
        style={star1}
        onClick={() => this.handleStarRating1()}
      ></i>{" "}
      <i
        className="fas fa-star star"
        style={star2}
        onClick={() => this.handleStarRating2()}
      ></i>{" "}
      <i
        className="fas fa-star star"
        style={star3}
        onClick={() => this.handleStarRating3()}
      ></i>{" "}
      <i
        className="fas fa-star star"
        style={star4}
        onClick={() => this.handleStarRating4()}
      ></i>{" "}
      <i
        className="fas fa-star star"
        style={star5}
        onClick={() => this.handleStarRating5()}
      ></i>
    </div>

    <div className="btn-div">
      <button
        className="btn btn-dark"
        onClick={() => {
          this.handleCloseModal();
        }}
      >
        Not Now
      </button>
      <button className="btn btn-primary" onClick={()=>this.Rateit(books.hotelId)}>Rate</button>
    </div>
    <div></div>
  </div>
</div>
</div>
</>
}
 

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
          
            {books.checkInStatus === true ? 
                  <button className="btn btn-primary" disabled >
                  
                  Checked in
                </button>
                :
                 
              <button className="btn btn-primary" onClick={()=> this.checkin(books._id)}>
                
                Check in
              </button>
              }
              
              <div className="mt-2">
            {books.checkOutStatus === true ? 
                  <button className="btn btn-primary" disabled >
                  
                  Checked Out
                </button>
                :
                 <>
              <button className="btn btn-primary" onClick={()=> this.checkout(books._id)}>
                
                Check Out
              </button>
              {books.canclebooking === true ? 
                <button className="btn btn-primary">  
                      Book again 
                    </button>
                    :
                    <>
                    <button className="btn btn-primary"  onClick={()=>this.canclebooking(books._id)}>   
                          Cancel Booking
                        </button>
                        </>           
              }
              </>
             
        }    </div>         
            </div>
          </div>
        </div>
        </>
      ))
    ) : (
      <div className="card">
        <p>No booking found yet</p>
      </div>
    )}
    </>
    )
  }
}

export default Booking;
