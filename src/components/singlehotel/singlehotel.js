import "react-image-gallery/styles/css/image-gallery.css";
import "react-image-lightbox/style.css";
import "./singlehotel.css";

import Axios from "axios";
import ImageGallery from "react-image-gallery";
import Lightbox from "react-image-lightbox";
import { Link } from "react-router-dom";
import React from "react";
import spin from '../../logo/spinner.gif';

//import ReactBnbGallery from 'react-bnb-gallery';

class SingleHotel extends React.Component {
  constructor() {
    super();
    this.state = {
      Hh: [],
      Rm: [],
      photoIndex: 0,
      isOpen: false,
      loading:true,
    };
  }

  async componentDidMount() {
    const {
      match: { params }
    } = this.props;
    var sentid = params.hotelId;
    // console.log("hotelid is", sentid);

    Axios.get(
      `https://calm-anchorage-14244.herokuapp.com/hotel/${sentid}`
    ).then(result =>
      this.setState({ Hh: result.data.data.hotel, Rm: result.data.data.room, loading:false })
    );
  }

  toggleGallery = () => {
    this.setState(prevState => ({
      galleryOpened: !prevState.galleryOpened
    }));
  };

  render() {
    const { Hh, Rm, photoIndex, isOpen } = this.state;
    // console.log("seperate room", Rm);
    const urls = [];
    const roomImg = []

    Hh.imagerUrl &&
      Hh.imagerUrl.forEach(url =>
        urls.push({ original: url.url, thumbnail: url.url })
      );

      let amenity;
        if(Hh.hotelPolicy){
          if(Hh.hotelPolicy.hotelAmenities.includes('"Bar"')){
            amenity = (<p>this is televison</p>)
          }
          // console.log('Hh policies', Hh.hotelPolicy.hotelAmenities.includes('"Bar"'))
        }
        // console.log('amenity', amenity)
        
    

      


      // console.log('roomimg', Rm)
        if(Rm.length >= 1){
      Rm[0].imageUrl.forEach(roomurl =>
        roomImg.push(roomurl.url)
      );
        }

    // console.log("UELS", roomImg);
    //algo to convert to usable arr
    // const roomss = [];
    // if (Hh.rooms) {
    //   Hh.rooms.map(room => {
    //     roomss.push(JSON.parse(room));
    //   });
    // }
    const MoreHpolicies = [];
    if (Hh.hotelPolicy) {
      Hh.hotelPolicy.moreHotelPolicies.map(morehp => {
        MoreHpolicies.push(JSON.parse(morehp));
      });
    }
    // console.log("SINGLE room", roomss)
    // console.log("morehp", MoreHpolicies);
    // console.log("full hotel", Hh);
    // console.log("full property hotel", Hh.propertyInfo);
    // console.log("full property image", Hh.imagerUrl);
    // if (Hh.propertyInfo) {
    //   console.log("full property hotel name", Hh.propertyInfo.hotelName);
    // }
    //


    return (
      this.state.loading ? (<div className="loadingicon"><img src={spin} alt="laoder"/></div>) :
      <div>
        <div className=" container flow">
        {this.state.loading ? (<div className="loadingicon"><img src={spin} alt="laoder" c/></div>) :
         ( <ImageGallery
            items={urls}
            sizes={"20x20"}
            cassName="app-image-gallery"
            showFullscreenButton={true}
            thumbnailPosition={"left"}
          />)}
        </div>

        <div className="container bod">
          <div>
            {Hh.propertyInfo && (
              <h2 className="text-center"> {Hh.propertyInfo.hotelName} </h2>
            )}
          </div>
          <hr />
          <div>
            <h5>Hotel Description</h5>
            {Hh.propertyInfo && (
              <>
                <p className=""> {Hh.propertyInfo.hotelDescription} </p>
                <p className="">
                  {Hh.propertyInfo.country}, {Hh.propertyInfo.state},{" "}
                  {Hh.propertyInfo.city}
                </p>
              </>
            )}
          </div>
          <hr />
          <div>
            <h5>Hotel Amenities </h5>
            <div className="row">
              {Hh.hotelPolicy &&
              
                Hh.hotelPolicy.hotelAmenities.map((Amenities,i )=> (
                  <div className="col-md-4" key={i}>
                    {/* <p className=""> {JSON.parse(Amenities)} </p> */}
                    {amenity}
                  </div>
                ))}
            </div>
          </div>

          <hr />
          <div>
            <h4>Room</h4>
            <div>
              {Rm.map((room, i)=> (
                <div className=" jumbotron2 p-3 mb-3" key={i}>
                  <div className="card border-0">
                    <h5>{room.roomType}</h5>
                    <div className="row no-gutters">
                      <div className="col-md-3">
                        <div className="card border-0">
                          <p className="card-header font-weight-bold">
                            Room size
                          </p>
                          <div className="card-body border-right">
                            <img
                              src={room.imageUrl[0].url}
                              className="pic"
                              alt="..."
                              onClick={() => this.setState({ isOpen: true })}
                              
                            />
                            {room.imageUrl.forEach(roomurl =>
                                  roomImg.push(roomurl.url)
                                )}
                            {isOpen &&
                                <Lightbox
                             
                                  mainSrc={roomImg[photoIndex]}
                                  nextSrc={
                                    roomImg[(photoIndex + 1) % roomImg.length]
                                  }
                                  prevSrc={
                                    roomImg[
                                      (photoIndex + roomImg.length - 1) %
                                        roomImg.length
                                    ]
                                  }
                                  onCloseRequest={() =>
                                    this.setState({ isOpen: false })
                                  }
                                  onMovePrevRequest={() =>
                                    this.setState({
                                      photoIndex:
                                        (photoIndex + roomImg.length - 1) %
                                        roomImg.length
                                    })
                                  }
                                  onMoveNextRequest={() =>
                                    this.setState({
                                      photoIndex:
                                        (photoIndex + 1) % roomImg.length
                                    })
                                  }
                                  imageTitle= {room.roomAmenities.map((amenities, i) => (
                                    <p key={i}>{amenities}</p>
                                  ))}
                                />
                              }

                            {/* <SRLWrapper>
                        {room.imageUrl.map(mru=>(
                          <img src={mru.url} className="pic" alt="..." /> 
                        ))}
                      </SRLWrapper> */}
                            <p>{room.roomSize}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="card border-0">
                          <p className="card-header font-weight-bold">
                            Bed & Facilities
                          </p>
                          <div className="card-body">
                            <p>{room.bedType}</p>
                            <p>{room.bedNumber}</p>
                            {room.roomAmenities.map((amenities, i) => (
                              <p key={i}>{amenities}</p>
                            ))}
                            <p className="card-text locate"></p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="card border-0">
                          <p className="card-header font-weight-bold">
                            Policies
                          </p>
                          <div className="card-body">
                            <p>{room.smokingPolicy}</p>
                            <p>{room.occupantNumber}</p>

                            <p className="card-text locate"></p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="card border-0">
                          <p className="card-header font-weight-bold">
                            price per room/night
                          </p>
                          <div className="card-body">
                            {/* <h6 className="mb-2 text-muted veiws">2,098</h6> */}

                            {/* <span className="veiw">v</span>
                        <span>views</span> */}

                            <p className="card-subtitle price">
                              {room.roomPrice}
                            </p>

                            <p className="text-muted pernight">per night</p>
                            <Link
                              to={`/bookingform/${room._id}`}
                              className="card-link btn btn-sm btn-primary cheker"
                            >
                              Book this room
                            </Link>
                            <p>Standard Rate: {room.standardRate}</p>
                            <p>Weekend Rate: {room.weekendRate}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h5>Hotel Policies</h5>

            {Hh.hotelPolicy && (
              <div className="">
                <span className="text-center h6">
                  {" "}
                  Check in time {Hh.hotelPolicy.checkIn} Check-out time{" "}
                  {Hh.hotelPolicy.checkOut}
                </span>
              </div>
            )}

            <hr />

            {Hh.hotelPolicy && (
              <div className="">
                <span className="text-center h6">
                  {" "}
                  Breafast available {Hh.hotelPolicy.isBreakfastAvailable}
                </span>
              </div>
            )}
            <hr />
            <div>
              <p>Payment method</p>
              {Hh.hotelPolicy &&
                Hh.hotelPolicy.paymentMethod.map((paym,i) => (
                  <div className="" key={i}>
                    <span className="text-center h6">{JSON.parse(paym)}</span>
                  </div>
                ))}
            </div>
            <hr />

            <h5>More Policies</h5>
            {MoreHpolicies.map((morehotelp,i) => (
              <div className="col-md-4" key={i}>
                Policy Title:{" "}
                <p className="text-center"> {morehotelp.policyTitle} </p>
                Policy Description:{" "}
                <p className="text-center"> {morehotelp.policyDescription} </p>
              </div>
            ))}
          </div>
          <hr />
        </div>
      </div>
    );
  }
}

export default SingleHotel;
