import "react-image-gallery/styles/css/image-gallery.css";
import "react-image-lightbox/style.css";
import "./singlehotel.css";
import Swiper from "react-id-swiper";
import TopNav from './topnav'
import {faStar, faBicycle, faBriefcase, faCamera, faChild, faCrosshairs, faDesktop, faDumbbell, faFan, faFilm, faGasPump, faGlassCheers, faHotTub, faMoneyBillAlt, faMonument, faShuttleVan, faSpa, faSwimmer, faTaxi, faTshirt, faWater, faWifi, faWineGlass } from '@fortawesome/free-solid-svg-icons';
import { faServicestack, faSpeakerDeck } from "@fortawesome/free-brands-svg-icons";
import Axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageGallery from "react-image-gallery";
import Lightbox from "react-image-lightbox";
import { Link } from "react-router-dom";
import SearchBar from '../SearchBar/searchbar'
import React from "react";
import { connect } from 'react-redux';
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
      reviews:[],
    };
  }

  async componentDidMount() {
    window.scrollTo(0,0);
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

    Axios.get(`https://calm-anchorage-14244.herokuapp.com/review/${sentid}`)
    .then(res=>{
      console.log(res.data.data.reviews,'reviews')
        this.setState({reviews:res.data.data.reviews})
     } )
      .catch(err=>{
        if(err.response){
          this.setState({review : err.response.data.message})
        }
      })
        //console.log(err.response,'error')
          
      
  }

 

  toggleGallery = () => {
    this.setState(prevState => ({
      galleryOpened: !prevState.galleryOpened
    }));
  };

  // amen=(amenities,i)=>{
  //   if(amenities.match(/wifi/)){
  //     return(
  //     <p>wifi</p>
  //     )
  //   }
  // }

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


  render() {

    const params = {
      slidesPerView: 3,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true
      // }
    };

    const param = {
      slidesPerView: 1,
      spaceBetween: 10,
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev"
      // },
      
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true
      // }
    };
//     let rest;
// const regex =/Wifi/ 
console.log(this.props.user, 'props user')
const {userData} = this.props.user
    const { Hh, Rm, reviews, photoIndex, isOpen } = this.state;
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
        
    console.log(Hh)

      


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

function gal(Ur,i){
      if(i===1){
        return <iframe width="843" height="480" style={{width:'250px',height:'300px'}} src="https://www.youtube.com/embed/pcnq-g1KJTA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      }
    else {
      return <img src={Ur.url} style={{width:'250px',height:'300px'}} alt="" id="Overview"/>
      }
       
}


    return (
      this.state.loading ? (<div className="loadingicon"><img src={spin} alt="laoder"/></div>) :
      <div>
        <div className="mt-2">
        <SearchBar title="Unlock Greate Deals"/>
        </div>
        {/* <div className="mt-2 container flow">
        {this.state.loading ? (<div className="loadingicon"><img src={spin} alt="laoder" c/></div>) :
         ( <ImageGallery
            items={urls}
            sizes={"50x50"}
            cassName="app-image-gallery"
            showFullscreenButton={true}
            thumbnailPosition={"left"}
          />)}
        </div> */}
  
 <TopNav Overviewid="#Overview" Roomid="#Room" Hotelid="#Hoteldescription" Amenitiesid="#Amenities" Reviewid="#Reviews"/>

<div className="mt-2 d-none d-lg-block">
        <Swiper {...params}>
        
             {Hh.imagerUrl.map((Ur,i) =>(
              
              gal(Ur,i)
               
              ))}
  
              </Swiper>
              </div>

              
              <div className="scrolling-wrapperb mt-5 d-lg-none d-xl-none ">
                <button className="controll previous round ml-3"><span className=''>&#8592;</span></button>
              {Hh.imagerUrl.map((url, i) => (

                  <img src={url.url} style={{backgroundColor:"gainsboro", height: "300px",width:'100%'}} alt="" />
                
              ))}
               <button className="controll next round"><span >&#8594;</span></button>
              </div>
            

        <div className="container">
        {Hh.propertyInfo && (
              <p><span className="h2">{Hh.propertyInfo.hotelName}</span><span className="h5">{this.Ratingstarts(Hh.propertyInfo.starRating)}</span> </p>
            )}
            <p className="">
                  {Hh.propertyInfo.country}, {Hh.propertyInfo.state},{" "}
                  {Hh.propertyInfo.city}
            </p>
          <div className="row no-gutters">
            <div clssName="col-12">
          <div className="card  mb-2 border p-3" id="Amenities">
            <div className="row no-gutters">
              {Hh.hotelPolicy &&
              
                Hh.hotelPolicy.hotelAmenities.map((Amenities,a) => {
                  
                  console.log(Amenities);
                  let wifi=Amenities.match(/wifi/gi);
                  let pool=Amenities.match(/Swiming pool/gi);
                  let spa=Amenities.search('spa')
                  let park=Amenities.match(/Water Park/gi)
                  let bycicle=Amenities.match(/Bicycle Rental/gi)
                  let car=Amenities.match(/Car Rental/gi);
                  let Cinema=Amenities.match(/cinema/gi);
                  let Audio=Amenities.match(/Audio System/gi)
                  let newpaper=Amenities.match(/Newspaper in lobby/gi);
                  let duty=Amenities.match(/Duty Manager/gi);
                  let lounge=Amenities.match(/Executive Lounge/gi)
                  let salon=Amenities.match(/Beauty Salon/gi)
                  let elevator=Amenities.match(/Elevator/gi)
                  let currency=Amenities.match(/Currency Exchange/gi)
                  let Ac=Amenities.match(/Air Condition/gi)
                  let Roomservice=Amenities.match(/Room Service/gi)
                  let cctv=Amenities.match(/CCTV in Public Places/gi)
                  let electric=Amenities.match(/Electric Vechicle Charging Station/gi)
                  let playground=Amenities.match(/Children Playground/gi)
                  let ironing=Amenities.match(/Ironing Service/gi)
                  let desk=Amenities.match(/Fronk Desk Service/gi)
                  let hot=Amenities.match(/Jacuzzi/gi)
                  let Airportshuttle=Amenities.match(/Airpot Shuttle/gi)
                  let fitness=Amenities.match(/Fitnes Center/gi)
                  let bar=Amenities.match(/Bar/gi)
                  let terace=Amenities.match(/Terrace/gi)
                  console.log(wifi,'prop')
                 
                  if(wifi){
                    
                    return(
                      <div className="col-4">
                       <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faWifi}
                    /> wifi</p>
                    </div>
                    )
                    
                  }
                  else if(pool){

                    return(
                      <div className="col-4">
                        <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faSwimmer}
                    /> Swimming Pool</p>
                    </div>
                    )
                  }
                  else if(spa > -1){
                    return(
                      <div className="col-4">
                       <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faSpa}
                    /> Spa</p>
                    </div>
                    ) 
                  }
                  else if(park){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faWater}
                    /> Water Park</p>
                    </div>
                    ) 

                  }else if(bycicle){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faBicycle}
                    /> Bycicle Rentals</p>
                    </div>
                    ) 

                  }else if(car){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faTaxi}
                    /> Car Rentals</p>
                    </div>
                    ) 

                  }else if(Cinema){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faFilm}
                    /> Cinema</p>
                    </div>
                    ) 

                  }else if(Audio){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faSpeakerDeck}
                    /> Audio System</p>
                    </div>
                    ) 

                  }else if(newpaper){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faBicycle}
                    /> Newspaper in Lobby</p>
                    </div>
                    ) 

                  }else if(duty){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faBriefcase}
                    /> Duty Manager</p>
                    </div>
                    ) 

                  }else if(lounge){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faWineGlass}
                    /> Executive Lounge</p>
                    </div>
                    ) 

                  }else if(salon){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faCrosshairs}
                    /> Beauty Salon</p>
                    </div>
                    ) 

                  }else if(elevator){
                    return(
                      <div className="col-2">
                      <p className="mr-2" key={a}>
                     Elevator</p>
                    </div>
                    ) 

                  }else if(currency){
                    return(
                      <div className="col-2">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faMoneyBillAlt}
                    /> Currency Exchange </p>
                    </div>
                    ) 

                  }else if(Ac){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faFan}
                    /> Air Conditioning</p>
                    </div>
                    ) 

                  }else if(Roomservice){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faServicestack}
                    /> Room Service</p>
                    </div>
                    ) 

                  }else if(cctv){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faCamera}
                    /> CCTV in Public Places</p>
                    </div>
                    ) 

                  }else if(electric){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faGasPump}
                    /> Electric Vechicle Charging Station</p>
                    </div>
                    ) 

                  }else if(playground){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faChild}
                    /> Children Playground</p>
                    </div>
                    ) 

                  }else if(ironing){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faTshirt}
                    /> Ironing Service</p>
                    </div>
                    ) 

                  }else if(desk){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faDesktop}
                    /> Front Desk Service</p>
                    </div>
                    ) 

                  }else if(hot){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faHotTub}
                    /> Hot tub/Jacuzzi</p>
                    </div>
                    ) 

                  }else if(Airportshuttle){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faShuttleVan}
                    /> Airport Shuttle</p>
                    </div>
                    ) 

                  }else if(fitness){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faDumbbell}
                    /> Fitness Center</p>
                    </div>
                    ) 

                  }else if(bar){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faGlassCheers}
                    /> Bar</p>
                    </div>
                    ) 

                  }else if(terace){
                    return(
                      <div className="col-2">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faMonument}
                    /> Terrace</p>
                    </div>
                    ) 

                  }
                
               //this.amen(Amenities,a) 
              //console.log(Amenities,'testing amenities') 
                })}
                </div>
            </div>
            </div>
            </div>
          


          <div className="row">
          <div className="col-md-8">
          <div className="card shadow p-3">
            <h5>Hotel Description</h5>
            {Hh.propertyInfo && (
              <p id="Hoteldescription"> {Hh.propertyInfo.hotelDescription} </p>             
            )}

          </div>
          </div>
          <div className="col-md-4">
          <Swiper {...param}>
          {reviews && 
           
              reviews.map(review =>(
          <div className="card shadow p-3">
                <>
                 {/* <img src={review.imgurl}  style={{ width: 40,height: 40, }} className="rounded-circle" alt="user pic"/> */}
                <p>{review.customerName}</p>
                <span className="veiw mr-auto bg-success text-light">{review.totalRating}</span>
                
                <p className="">{review.review}</p>
                </>
              
          </div>
          ))
          
          }
          </Swiper>
          </div>
          </div>
          <div>
            <h4>Room</h4>
            <div>
              {Rm.map((room, i)=> (
                <Link to={`/bookingform/${room._id}/${Hh._id}`}  style={{textDecoration:"none"}} >
                <div className=" jumbotron2 p-3 mb-3" key={i}>
                  <div className="card border-0" id="Room">
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
                              className=""
                              alt="..."
                              style={{height:'200px', width:'100%'}}
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
                            {room.roomAmenities.map((Amenities,a) => {
                  
                  console.log(Amenities);
                  let wifi=Amenities.match(/wifi/gi);
                  let pool=Amenities.match(/Swiming pool/gi);
                  let spa=Amenities.search('spa')
                  let park=Amenities.match(/Water Park/gi)
                  let bycicle=Amenities.match(/Bicycle Rental/gi)
                  let car=Amenities.match(/Car Rental/gi);
                  let Cinema=Amenities.match(/cinema/gi);
                  let Audio=Amenities.match(/Audio System/gi)
                  let newpaper=Amenities.match(/Newspaper in lobby/gi);
                  let duty=Amenities.match(/Duty Manager/gi);
                  let lounge=Amenities.match(/Executive Lounge/gi)
                  let salon=Amenities.match(/Beauty Salon/gi)
                  let elevator=Amenities.match(/Elevator/gi)
                  let currency=Amenities.match(/Currency Exchange/gi)
                  let Ac=Amenities.match(/Air Condition/gi)
                  let Roomservice=Amenities.match(/Room Service/gi)
                  let cctv=Amenities.match(/CCTV in Public Places/gi)
                  let electric=Amenities.match(/Electric Vechicle Charging Station/gi)
                  let playground=Amenities.match(/Children Playground/gi)
                  let ironing=Amenities.match(/Ironing Service/gi)
                  let desk=Amenities.match(/Fronk Desk Service/gi)
                  let hot=Amenities.match(/Jacuzzi/gi)
                  let Airportshuttle=Amenities.match(/Airpot Shuttle/gi)
                  let fitness=Amenities.match(/Fitnes Center/gi)
                  let bar=Amenities.match(/Bar/gi)
                  let terace=Amenities.match(/Terrace/gi)
                  console.log(wifi,'prop')
                 
                  if(wifi){
                    
                    return(
                      <div className="col-4">
                       <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faWifi}
                    /> wifi</p>
                    </div>
                    )
                    
                  }
                  else if(pool){

                    return(
                      <div className="col-4">
                        <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faSwimmer}
                    /> Swimming Pool</p>
                    </div>
                    )
                  }
                  else if(spa > -1){
                    return(
                      <div className="col-4">
                       <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faSpa}
                    /> Spa</p>
                    </div>
                    ) 
                  }
                  else if(park){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faWater}
                    /> Water Park</p>
                    </div>
                    ) 

                  }else if(bycicle){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faBicycle}
                    /> Bycicle Rentals</p>
                    </div>
                    ) 

                  }else if(car){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faTaxi}
                    /> Car Rentals</p>
                    </div>
                    ) 

                  }else if(Cinema){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faFilm}
                    /> Cinema</p>
                    </div>
                    ) 

                  }else if(Audio){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faSpeakerDeck}
                    /> Audio System</p>
                    </div>
                    ) 

                  }else if(newpaper){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faBicycle}
                    /> Newspaper in Lobby</p>
                    </div>
                    ) 

                  }else if(duty){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faBriefcase}
                    /> Duty Manager</p>
                    </div>
                    ) 

                  }else if(lounge){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faWineGlass}
                    /> Executive Lounge</p>
                    </div>
                    ) 

                  }else if(salon){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faCrosshairs}
                    /> Beauty Salon</p>
                    </div>
                    ) 

                  }else if(elevator){
                    return(
                      <div className="col-2">
                      <p className="mr-2" key={a}>
                     Elevator</p>
                    </div>
                    ) 

                  }else if(currency){
                    return(
                      <div className="col-2">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faMoneyBillAlt}
                    /> Currency Exchange </p>
                    </div>
                    ) 

                  }else if(Ac){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faFan}
                    /> Air Conditioning</p>
                    </div>
                    ) 

                  }else if(Roomservice){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faServicestack}
                    /> Room Service</p>
                    </div>
                    ) 

                  }else if(cctv){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faCamera}
                    /> CCTV in Public Places</p>
                    </div>
                    ) 

                  }else if(electric){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faGasPump}
                    /> Electric Vechicle Charging Station</p>
                    </div>
                    ) 

                  }else if(playground){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faChild}
                    /> Children Playground</p>
                    </div>
                    ) 

                  }else if(ironing){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faTshirt}
                    /> Ironing Service</p>
                    </div>
                    ) 

                  }else if(desk){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faDesktop}
                    /> Front Desk Service</p>
                    </div>
                    ) 

                  }else if(hot){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faHotTub}
                    /> Hot tub/Jacuzzi</p>
                    </div>
                    ) 

                  }else if(Airportshuttle){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faShuttleVan}
                    /> Airport Shuttle</p>
                    </div>
                    ) 

                  }else if(fitness){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faDumbbell}
                    /> Fitness Center</p>
                    </div>
                    ) 

                  }else if(bar){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faGlassCheers}
                    /> Bar</p>
                    </div>
                    ) 

                  }else if(terace){
                    return(
                      <div className="col-4">
                      <p className="mr-2" key={a}>
                      <FontAwesomeIcon
                      className='wicon'
                      icon={faMonument}
                    /> Terrace</p>
                    </div>
                    ) 

                  }
                
               //this.amen(Amenities,a) 
              //console.log(Amenities,'testing amenities') 
                })}
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
                            Price Per Room/Night
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
                              to={`/bookingform/${room._id}/${Hh._id}`}
                              className="card-link btn btn-sm btn-primary cheker"
                            >
                              Book this room
                            </Link>
                           
                            
                            {/* <p>Standard Rate: {room.standardRate}</p>
                            <p>Weekend Rate: {room.weekendRate}</p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="card p-3 shadow">
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
                    <span className="text-center h6">{paym}</span>
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
const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(SingleHotel)
