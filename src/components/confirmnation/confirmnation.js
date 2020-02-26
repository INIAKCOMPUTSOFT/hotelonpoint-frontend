import "react-datepicker/dist/react-datepicker.css";
import Axios from 'axios'
import React from "react";

import axios from "axios";
import { connect } from "react-redux";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class ConfirmBooking extends React.Component {
  constructor(props) {
    super();
    this.state = {
      Rm: {},
      Hh:[],
      title: "",
      fullname: "",
      email: "",
      confirmemail: "",
      host:"",
      
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

  bookingconfirm=()=>{
    const data = {
      email: this.state.email,
      confirmemail: this.state.confirmemail,
      fullname: this.state.fullname,
      otherrequest: this.state.otherrequest,
      title: this.state.title,
    };

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
  handleClick=()=>{
    window.print();
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
   
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
          <div className="">
                   
                    <div className="">
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
                            <label>Fullname</label>
                            <input
                              type="text"
                              className="form-control"
                              name="fullname"
                              onChange={this.handlechange}
                              placeholder="Fullname"
                            />
                          </div>
                        </div>
                        <div className="col-md-6"></div>
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
                              placeholder="user@example.com"
                            />
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
                              name="ConfirmEmail"
                              onChange={this.handlechange}
                              placeholder="Confirm Email"
                            />
                          </div>
                        </div>
                        <div className="col-md-6"></div>
                      </div>

                      {/* <div className="row no-gutters">
                          <div className="col-md-6"></div>
                          </div> */}
                    </div>
                  </div>
                  <div className="row mb-1">
                        <div className="col-md-6">
                        <div className="row">
                        <div className="col-md-8">  
                        <div className="card border-0">
                        <h4>Contact Host</h4>

                        <teaxtarea name="host" onChange={this.handlechange()}>

                        </teaxtarea>
                      </div>
                      </div>
                      <div className="col-md-4">

                    </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    </div>
                </div>
          
          <div className="col-md-6">
            <div className="card shadow" style={{padding:"5px, 5px, 5px, 5px"}}>
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

      <button onClick={this.handleClick()}>Print Booking Details</button>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(ConfirmBooking);
