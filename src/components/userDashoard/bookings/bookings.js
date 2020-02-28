import Axios from "axios";
import React from "react";
import "./bookings.css"
class Booking extends React.Component {
  constructor() {
    super();
    this.state = {
      hotel:'',
      Buking: [],
      hotelinfo:[],
      loading: true,
      checkin:true,
      checkout:true,
      canclebook:true,
      remark: "",
      rating:0,
      checkoutstatus:'',
      checkouthotelid:[],
    };
  }

  componentDidMount() {
    Axios.get(`https://calm-anchorage-14244.herokuapp.com/booking/userall`)
      .then(result => {
        //console.log("result", result);
        this.setState({ Buking: result.data.data.bookings,  loading: false });
      })
      .catch(err => {
        console.log(err, "error");
      });

      // let hotelid 
      // if(this.state.Buking){
      //   console.log(this.state.Buking.hotelId,'tgh gfd')
      // }
      


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


checkout=(bookingid,hotelId)=>{
  const data = [
    {
      propName: 'checkOutStatus',
      value: this.state.checkout
    }
  ]

  Axios
    .put(`https://calm-anchorage-14244.herokuapp.com/booking/user/${bookingid}`, data)
    .then(res=>{ console.log(res,'res')
    this.setState({ checkoutstatus: res.statusText})
  })


    if(this.state.checkoutstatus && this.state.Buking && this.state.checkoutstatus === "OK"){
       setTimeout(()=> {window.location.href=`/reviews/${hotelId}`}, 3000)
      console.log(this.state.checkoutstatus,'status')
      console.log(hotelId,'id')
    }
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
    setTimeout(()=> {window.location.href="/bookings"})
  }


  render() {


    const booking = this.state.Buking;

    console.log(booking, "booking");

    const { loading, rating, showModal} = this.state;
    
    // function getimgURL(urlD){
    //   let ur=urlD;
    //   console.log(ur, "YEA....");
    //   console.log(typeof ur)
    //    return (<img src={ur} alt='p'/>)
    //  }
    // function gethotelimg(hotelid){
    // let hotel=''
    //   Axios.get(`https://calm-anchorage-14244.herokuapp.com/hotel/${hotelid}`)
    //   .then(res => {
    //     //console.log("result hotel", res, "123");
    //     hotel= res.data.data.hotel.imagerUrl[3].url;
    //     getimgURL(hotel)
    //   })
  
    // }
    

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
    console.log("state values", this.state.hotel);


    return(
      <>
      { booking.length >= 1 ? (
        <div className="row">
      {booking.map((books, i) => (
        <div class="col-md-4">
        <div className="card">
       {/* {getimgURL(gethotelimg(books.hotelId))} */}
         {/* {console.log(getimgURL(gethotelimg(books.hotelId)),'the')}                   
{(<img src={gethotelimg(books.hotelId)} alt="pis"/>)}
           
             */}
            <div class="card-body">
 
              <h5 class="card-title text-dark">{books.hotelName}</h5>
           
            
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
              {/* {gethotelimg(books.hotelId)} */}
              </div>
              
            
            <div className="card-footer">

            {books.checkInStatus === true ?
                  <button className="btn btn-primary " disabled >
                  Checked in
                </button>
                :
              <button className="btn btn-primary" onClick={()=> this.checkin(books._id)}>
                Check in
              </button>
              }

              
            {books.checkOutStatus === true ?
                  <button className="btn btn-primary ml-2" disabled >

                  Checked Out
                </button>
                :
                 
              <button className="btn btn-primary ml-2" onClick={()=> this.checkout(books._id,books.hotelId)}>
                Check Out
              </button>      
        } 

        {books.canclebooking === true && books.checkOutStatus === false && books.checkInStatus === false ?
                <button className="btn btn-primary ">
                      Book again
                    </button>
                    :
       books.canclebooking === false && books.checkOutStatus === false && books.checkInStatus === false ?
                    <button className="btn btn-primary ml-3"  onClick={()=>this.canclebooking(books._id)}>
                          Cancel Booking
                        </button> 
                      :
                      <>
                      </>  
              } 
          </div>
          </div>
            </div>        
            
      ))}
      </div>
      
    ) : (
      
      <div className="card p-5 justify-content-center">
        <p>No booking found yet</p>
      </div>
      
    )}
    
    </>)
  }
}

export default Booking;
