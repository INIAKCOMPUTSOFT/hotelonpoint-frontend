import Axios from "axios";
import React from "react";
import { Link } from 'react-router-dom';
import "./singlehotel.css";

class SingleHotel extends React.Component {
  constructor() {
    super();
    this.state = {
      Hh: []
    };
  }

  async componentDidMount() {
    const {
      match: { params }
    } = this.props;
    var sentid = params.hotelId;
    console.log("hotelid is", sentid);

    Axios.get(
      `https://calm-anchorage-14244.herokuapp.com/hotel/${sentid}`
    ).then(result => this.setState({ Hh: result.data.data }));
  }

  render() {
    const { Hh } = this.state;

    //algo to convert to usable arr
    const roomss = [];
    if (Hh.rooms) {
      Hh.rooms.map(room => {
        roomss.push(JSON.parse(room));
      });
    }

    const MoreHpolicies = [];
    if (Hh.hotelPolicy) {
      Hh.hotelPolicy.moreHotelPolicies.map(morehp => {
        MoreHpolicies.push(JSON.parse(morehp));
      });
    }
    console.log("SINGLE room", roomss)
    console.log("morehp", MoreHpolicies);
    console.log("full hotel", Hh);
    console.log("full property hotel", Hh.propertyInfo);
    if (Hh.propertyInfo) {
      console.log("full property hotel name", Hh.propertyInfo.hotelName);
    }
    //

    return (
      <div>
        <div>
          {/* <div>
            {Hh.imagerUrl &&(
              Hh.imagerUrl.map(IURL =>(
              
                  <img src={IURL.url} alt="" />
              

              ))
            )
            }
          
          </div> */}
          <div className="scrollercontainer">
            {/* <div className="box">
            {Hh.imagerUrl &&(
              Hh.imagerUrl.map(IURL =>(              
                  <img src={IURL.url} weidth="90%" height="150"alt="" />           
              ))
            )
            }
            </div> */}
          </div>
        </div>

        <div className="container">
          <div>
            {Hh.propertyInfo && (
              <h4 className="text-center"> {Hh.propertyInfo.hotelName} </h4>
            )}
          </div>
          <hr/>
          <div>
             <h5>Hotel Description</h5>   
            {Hh.propertyInfo && (
              <>
              <p className=""> {Hh.propertyInfo.hotelDescription} </p>
              <p className="">{Hh.propertyInfo.country}, {Hh.propertyInfo.state}, {Hh.propertyInfo.city}</p>
              </>
            )}
          </div>
          <hr/>
          <div>
            <h5>Hotel Amenities </h5>
            <div className="row">
              {Hh.hotelPolicy &&
                Hh.hotelPolicy.hotelAmenities.map(Amenities => (
                  <div className="col-md-4">
                    <p className=""> {JSON.parse(Amenities)} </p>
                  </div>
                ))}
            </div>
          </div>

          <hr />
          <div>
            <h4>Room</h4>
            <div >
              {roomss.map(room=>(
              
              <div className=" jumbotron2 p-3 mb-3">
              <div className="card border-0">
              <h5>{room.roomType}</h5>
                <div className="row no-gutters">
                  <div className="col-md-3">
                    <div className="card border-0">
                    <p className="card-header font-weight-bold">Room size</p>
                      <div className="card-body border-right">
                      <img src='...' className="pic" alt="..." />
                      <p>{room.roomSize}</p>
                     
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card border-0">
                    <p className="card-header font-weight-bold">Bed & Facilities</p>
                      <div className="card-body">
                 
                        <p>{room.bedType}</p>
                        <p>{room.bedNumber}</p>
                        {room.roomAmenities.map(amenities=>(
                          <p>{amenities}</p>
                        ))}
                        <p className="card-text locate">
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card border-0">
                    <p className="card-header font-weight-bold">Policies</p>
                      <div className="card-body">
                        
                       
                        <p>{room.smokingPolicy}</p>
                        <p>{room.occupantNumber}</p>

                        <p className="card-text locate">
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card border-0">
                    <p className="card-header font-weight-bold">price per room/night</p>
                      <div className="card-body">
                        {/* <h6 className="mb-2 text-muted veiws">2,098</h6> */}
  
                        {/* <span className="veiw">v</span>
                        <span>views</span> */}
                       
                        <p className="card-subtitle price">{room.roomPrice}</p>
  
                        <p className="text-muted pernight">per night</p>
                        <Link to="/bookinform">
                        <a
                          href="#"
                          className="card-link btn btn-sm btn-primary cheker"
                        >
                         Book this room
                        </a>
                        </Link>
                        <p>Standard Rate: {room.standardRate}</p>
                        <p>Weekend Rate: {room.weekendRate}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             
              
              ))
               }
            </div>
          </div>
          <div>
             <h5>Hotel Policies</h5>
              
            {Hh.hotelPolicy && (
               
                  <div className="">
                    <span className="text-center h6"> Check in time {Hh.hotelPolicy.checkIn}  Check-out time  {Hh.hotelPolicy.checkOut}</span>
                  </div>
            )}
            
            <hr/>

            {Hh.hotelPolicy && (
               
               <div className="">
                 <span className="text-center h6"> Breafast available {Hh.hotelPolicy.isBreakfastAvailable}</span>
               </div>
         )}    
         <hr/>
         <div>
         <p>Payment method</p>
         {Hh.hotelPolicy && (
           
               Hh.hotelPolicy.paymentMethod.map(paym=>(
                <div className="">
                <span className="text-center h6">{JSON.parse(paym)}</span>
              </div>
               ))
        
         )}  
         </div>  
         <hr/>

            <h5>More Policies</h5>
            {MoreHpolicies.map(morehotelp => (
                  <div className="col-md-4">
                   Policy Title: <p className="text-center"> {morehotelp.policyTitle} </p>
                    Policy Description: <p className="text-center"> {morehotelp.policyDescription} </p>
                  </div>
                ))
            }
          </div>
          <hr/>
        </div>
      </div>
    );
  }
}

export default SingleHotel;
