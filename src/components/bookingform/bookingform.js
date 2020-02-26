import "react-datepicker/dist/react-datepicker.css";
import "./bookingform.css";
import Axios from 'axios'
import Access from "./bankicons/access.png";
import Firstbank from "./bankicons/firstbank.png";
import GTB from "./bankicons/gtb.png";
import { Link } from "react-router-dom";
import Payment from "../payment/payment";
import React from "react";
import Zenith from "./bankicons/zenith.png";
import axios from "axios";
import { connect } from "react-redux";
import { faStar,faCheck, faBicycle, faBriefcase, faCamera, faChild, faCrosshairs, faDesktop, faDumbbell, faFan, faFilm, faGasPump, faGlassCheers, faHotTub, faMoneyBillAlt, faMonument, faShuttleVan, faSpa, faSwimmer, faTaxi, faTshirt, faWater, faWifi, faWineGlass } from '@fortawesome/free-solid-svg-icons';
import { faServicestack, faSpeakerDeck } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class BookingForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      Rm: {},
      Hh:[],
      title: "",
      firstname: "",
      lastname: "",
      otherrequest: "",
      email: "",
      phone: "",
      wantairportshuttle: false,
      getdeals: false,
      startdate: "",
      enddate: "",
    };
  }

  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    var RoomId = params.roomid;
    var HotelId =params.hotelid;

    console.log(RoomId,'room id')
    console.log(HotelId, 'hotel id')
    axios
      .get(`https://calm-anchorage-14244.herokuapp.com/room/${RoomId}/room`)
      .then(res => {
        this.setState({ Rm: res.data.data });
        //console.log('res',res)
      });

      Axios.get(
        `https://calm-anchorage-14244.herokuapp.com/hotel/${HotelId}`
      ).then(result =>
        //console.log(result,'hotel result')
         this.setState({ Hh: result.data.data.hotel })
      );

    console.log('Rm',this.state.Rm)
    console.log('Hh',this.state.Hh)
  }

  handlechange = (event, date) => {
    event.preventDefault();
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
    console.log(this.state);
  };

  payOnArrival=()=>{
    const data = {
      email: this.state.email,
      phone: this.state.phone,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      getdeals: this.state.getdeals,
      otherrequest: this.state.otherrequest,
      title: this.state.title,
      wantairportshuttle: this.state.wantairportshuttle,
      roomId: this.props.match.params.roomid,
      roomType: this.state.Rm.roomType,
      checkin: this.toISOString(this.state.startdate),
      checkout: this.toISOString(this.state.enddate),
      paymentMethod:"payonarrival",
      paymentstatus:"false"
    };

    console.log(data,'data')
    // axios
    // .post(`http://localhost:3400/room/${RoomId}/bookingform`)
    // .then(res => {
    
    //   console.log('res',res)
    // });
  }

  payByTransfer=()=>{
    const data = {
      email: this.state.email,
      phone: this.state.phone,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      getdeals: this.state.getdeals,
      otherrequest: this.state.otherrequest,
      title: this.state.title,
      wantairportshuttle: this.state.wantairportshuttle,
      roomId: this.props.match.params.roomid,
      roomType: this.state.Rm.roomType,
      checkin: this.toISOString(this.state.startdate),
      checkout: this.toISOString(this.state.enddate),
      paymentMethod:"Transfer",
      AcctNo:"0175100070",
      AcctName:"Hotel on points Ltd",
      BankName: "GTB",
      paymentstatus:"false",
    };
console.log(data,'data')
    // axios
    // .post(`http://localhost:3400/room/${RoomId}/bookingform`)
    // .then(res => {
    
    //   console.log('res',res)
    // });
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

  convDate=(dateString)=>{
    return new Date(dateString).toISOString();
}

  render() {


    //console.log('sRm', this.state.Rm)
    const { Rm, Hh } = this.state;
    const { userData } = this.props.user;
    console.log("rm", Rm.roomPrice);
    console.log(Hh, 'the hotel details')
    let amount = 0;
    if (Rm.roomPrice) {
      amount = Rm.roomPrice;
      console.log(amount,'amount of room')
    }
    const data = {
      email: this.state.email,
      phone: this.state.phone,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      getdeals: this.state.getdeals,
      otherrequest: this.state.otherrequest,
      title: this.state.title,
      wantairportshuttle: this.state.wantairportshuttle,
      roomId: this.props.match.params.roomid,
      roomType: Rm.roomType,
      checkin: this.convDate(this.state.startdate),
      checkout: this.convDate(this.state.enddate),
      paymentMethod:"paystack"
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div>
              <div className="row mb-1">
                <div className="col-sm-12">
                  <div className="card shadow p-3 mb-1 bg-white rounded">
                    <div className="card-head">
                      <h4 className="ml-3">Traveller information</h4>
                    </div>
                    <div className="card-body">
                      <div className="row no-gutters">
                        <div className="col-md-4 chck">
                          <div className="form-check radio">
                            <input
                              className="form-radio-button"
                              checked={this.state.title === "Mr"}
                              name="title"
                              onChange={this.handlechange}
                              type="radio"
                              value="Mr"
                              id="defaultCheck1"
                            />
                            <label
                              className="form-check-label"
                              for="defaultCheck1"
                            >
                              Mr
                            </label>
                          </div>
                          <div className="form-check radio">
                            <input
                              className="form-radio-button"
                              checked={this.state.title === "Mrs"}
                              name="title"
                              onChange={this.handlechange}
                              type="radio"
                              value="Mrs"
                              id="defaultCheck1"
                            />
                            <label
                              className="form-check-label"
                              for="defaultCheck1"
                            >
                              Mrs
                            </label>
                          </div>
                          <div className="form-check radio">
                            <input
                              className="form-radio-button"
                              checked={this.state.title === "Miss"}
                              name="title"
                              onChange={this.handlechange}
                              type="radio"
                              value="Miss"
                              id="defaultCheck1"
                            />
                            <label
                              className="form-check-label"
                              for="defaultCheck1"
                            >
                              Miss
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6"></div>
                      </div>
                      <div className="row ">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Firstname</label>
                            <input
                              type="text"
                              className="form-control"
                              name="firstname"
                              onChange={this.handlechange}
                              aria-describedby="emailHelp"
                              placeholder="Enter firstname"
                            />
                            <small
                              id="emailHelp"
                              className="form-text text-muted"
                            >
                              Please first letter is capital
                            </small>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Lastname</label>
                            <input
                              type="text"
                              className="form-control"
                              name="lastname"
                              onChange={this.handlechange}
                              placeholder="Enter lastname"
                            />
                            <small
                              id="emailHelp"
                              className="form-text text-muted"
                            >
                              Please first letter is capital
                            </small>
                          </div>
                        </div>
                      </div>

                      <div className="row no-gutters">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Email address</label>
                            <input
                              type="email"
                              className="form-control"
                              onChange={this.handlechange}
                              name="email"
                              aria-describedby="emailHelp"
                              placeholder="user@example.com"
                            />
                            <small
                              id="emailHelp"
                              className="form-text text-muted"
                            >
                              We will send your booking confirmation (including
                              the hotel's contact information) to this email.
                              Please ensure your email is entered correctly.
                            </small>
                          </div>
                        </div>
                        <div className="col-md-6"></div>
                      </div>
                      <div className="row no-gutters">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Mobile number</label>
                            <input
                              type=""
                              className="form-control"
                              name="phone"
                              onChange={this.handlechange}
                              aria-describedby="emailHelp"
                              placeholder="Enter mobile number"
                            />
                            <small
                              id="emailHelp"
                              className="form-text text-muted"
                            >
                              We’ll only contact you in an emergency
                            </small>
                          </div>
                        </div>
                        <div className="col-md-6"></div>
                      </div>

                      {/* <div className="row no-gutters">
                          <div className="col-md-6"></div>
                          </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-1">
                <div className="col-sm-12">
                  <div className="card shadow p-3 mb-2 bg-white rounded">
                    <div className="card-body">
                      <h5 className="text-dark">
                        Special Request
                        <small className="text-muted"> (optional)</small>
                      </h5>
                      <div className="row no-gutters">
                        <p>
                          Your requests will be passed on to the hotel but
                          cannot be guaranteed.
                        </p>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label for="exampleFormControlTextarea1">
                              Extra request
                            </label>
                            <textarea
                              className="form-control txa"
                              id="exampleFormControlTextarea1"
                              name="extra-request"
                              onChange={this.handlechange}
                            ></textarea>
                          </div>
                        </div>
                        {/* <div className="col-md-6"></div> */}
                      </div>
                      <div className="row mb-1">
                        <div className="col-md-6">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              name="wantairportshuttle"
                              onChange={this.handlechange}
                              checked={this.state.wantairportshuttle}
                              type="checkbox"
                              value=""
                              id="defaultCheck1"
                            />
                            <label
                              className="form-check-label"
                              for="defaultCheck1"
                            >
                              <b>Want to book Airport-Shuttle</b>.
                              <br />
                              Get from the airport to your accomodation without
                              hassles. We will contact you after your booking is
                              guranteed to provide you available taxi options.
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6"></div>
                      </div>
                      <div className="row mb-1">
                        <div className="col-md-12">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              onChange={this.handlechange}
                              name="getdeals"
                              checcked={this.state.getdeals}
                              type="checkbox"
                              value=""
                              id="defaultCheck1"
                            />
                            <label
                              className="form-check-label"
                              for="defaultCheck1"
                            >
                              Check this box if you would not like to receive
                              Hotel-on-points.com <b>special deals</b> email
                              newsletter that contains great hotel promotions
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mb-1">
                <div className="col-sm-12">
                  <div className="card shadow p-3 mb-2 bg-white rounded">
                    <div className="card-body">
                      <h5 className="text-dark">Check in and Check out</h5>
                      <div className="row no-gutters">
                        <div className="col-md-6">
                          <input
                            className="form-control"
                            type="date"
                            name="startdate"
                            value={this.state.startdate}
                            onChange={this.handlechange}
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            className="form-control"
                            type="date"
                            name="enddate"
                            onChange={this.handlechange}
                          />
                        </div>
                      </div>
                      <div className="row mb-1">
                        <div className="col-md-12">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              onChange={this.handlechange}
                              name="getdeals"
                              checcked={this.state.getdeals}
                              type="checkbox"
                              value=""
                              id="defaultCheck1"
                            />
                            <label
                              className="form-check-label"
                              for="defaultCheck1"
                            >
                              Check this box if you would not like to receive
                              Hotel-on-points.com <b>special deals</b> email
                              newsletter that contains great hotel promotions
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mb-1">
                <div className="col-sm-12">
                  <div className="card shadow p-3 mb-2 bg-white rounded">
                    <div className="card-body">
                      <p>
                        The charges below are included in your overall room
                        price:
                      </p>
                      <p>New Year's Eve gala dinner fee</p>
                      <p>Christmas Eve gala dinner fee</p>
                      <br />
                      <h4>Reservation Terms & Conditions of Booking</h4>
                      <hr />
                      <p>
                        By clicking "Book", you agree you have read and accept
                        our <Link>Terms and Conditions</Link> and{" "}
                        <Link>Privacy Policy</Link>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mb-1">
                <div className="col-md-12 ">
                  <div className=" shadow mb-2 mdpd bg-white rounded">
                    <div className="text-center">
                      <ul
                        className="nav nav-pills mb-3"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="pills-paynow-tab"
                            data-toggle="pill"
                            href="#pills-paynow"
                            role="tab"
                            aria-controls="pills-paynow"
                            aria-selected="true"
                          >
                            Pay Now
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="pills-paylater-tab"
                            data-toggle="pill"
                            href="#pills-paylater"
                            role="tab"
                            aria-controls="pills-paylater"
                            aria-selected="false"
                          >
                            Pay Later
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="pills-payonarrival-tab"
                            data-toggle="pill"
                            href="#pills-payonarrival"
                            role="tab"
                            aria-controls="pills-payonarrival"
                            aria-selected="false"
                            onClick={this.payOnArrival}
                          >
                            Pay On Arrival
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-content " id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="pills-paynow"
                        role="tabpanel"
                        aria-labelledby="pills-paynow-tab"
                      >
                        <h2 className="text-center">Amount: ${amount}</h2>

                        <div className="row">
                          <div className="col-12">
                            {userData && (
                              <Payment
                                amount={amount}
                                userId={userData._id}
                                info={data}
                                onclick={this.handlepress}
                                container="contain"
                                butin="btn-block btn-primary btn"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-paylater"
                        role="tabpanel"
                        aria-labelledby="pills-paylater-tab"
                      >
                        <div className="card border-0 text-center">
                          <h5>
                            {" "}
                            You prefer bank transfer this are our bank details:
                          </h5>
                          <div className="card-body">
                                                      
                            <img
                              src={GTB}
                              className="mr-1"
                              width="100"
                              height="100"
                              alt="..."
                            />

                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 ">
                            <button
                               onClick={this.paybyTransfer}
                              className="btn btn-block btn-primary "
                            >
                              Book
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* last tab */}
                      <div
                        className="tab-pane fade"
                        id="pills-payonarrival"
                        role="tabpanel"
                        aria-labelledby="pills-payonarrival-tab"
                      >
                        {" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="row">
                            <div className="col-md-12">
                              <button className="btn btn-block btn-primary">Book</button>
                            </div>
                          </div> */}
            </div>
          </div>
          <div className="col-md-3">
            <div className="card " style={{padding:"5px, 5px, 5px, 5px"}}>
              <h5 className="ml-4">Reservation Details</h5>
               <div>{Hh.imagerUrl &&
              (<img src={Hh.imagerUrl[0].url} className="ml-4" style={{width:"200px",height:"200px"}} alt="hotel picture"/>)
              }
              {Hh.propertyInfo &&
              (<p className="ml-4">{Hh.propertyInfo.hotelName}{this.Ratingstarts(Hh.propertyInfo.starRating)} </p>)
            }
            {Hh.propertyInfo &&  
            (<p className="ml-4">
                  {Hh.propertyInfo.country}, {Hh.propertyInfo.state},{" "}
                  {Hh.propertyInfo.city}
            </p>)}
            {Hh.propertyInfo && 
            (<p className="ml-4">{this.boxRatingstarts(Hh.propertyInfo.starRating)}</p>)
              }

              <hr/>
                <p className="text-secondary ml-4">Checkin</p>
                <p className="ml-4">{this.state.startdate}</p>
            
                <hr/>
              <p className="text-secondary ml-4">Checkout</p>
              <p className="ml-4">{this.state.enddate}</p>

              <hr/>
            <h6 className="ml-4">{Rm.roomType} {amount}</h6>
            <p className="ml-4 h-3">Total      {amount}</p>
              </div> 
            </div>

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(BookingForm);
