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
        console.log("result", result);
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
    const data = [
      {
        propName: 'checkInStatus',
        value: true
      }
    ]
    Axios
    .put(`https://calm-anchorage-14244.herokuapp.com/booking/user/${bookingid}`, data)
    .then(res=>{ console.log(res,'res')
    if(res.statusText === "OK"){
       setTimeout(()=> {window.location.href=`/bookings`}, 3000)
    }
    this.setState({ checkoutstatus: res.statusText})
  })
  }


checkout=(bookingid,hotelId)=>{
  const data = [
    {
      propName: 'checkOutStatus',
      value: true
    }
  ]

  Axios
    .put(`https://calm-anchorage-14244.herokuapp.com/booking/user/${bookingid}`, data)
    .then(res=>{ console.log(res,'res')
    if(res.statusText === "OK"){
       setTimeout(()=> {window.location.href=`/reviews/${hotelId}`}, 3000)
    }
    this.setState({ checkoutstatus: res.statusText})
  })

}

   canclebooking=(bookingid)=>{
     //this.setState({cancelbook:true})
    const data = {
      propName:'cancellationStatus',
      value:true
    }
    Axios
    .put(`https://calm-anchorage-14244.herokuapp.com/booking/user/${bookingid}`, data)
    .then(res=>{ console.log(res, 'cancel ref')})

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

              
            {books.checkOutStatus === false && books.checkInStatus === true ?
                  
                 <button className="btn btn-primary ml-2" onClick={()=> this.checkout(books._id,books.hotelId)}>
                 Check Out
               </button> 
                :
                <button className="btn btn-primary ml-2" disabled >

                Checked Out
              </button>
                  
        }
<br/>

        {books.cancellationStatus === false && books.checkOutStatus === false && books.checkInStatus === false ?
                    <button className="btn btn-primary ml-3"  onClick={()=>this.canclebooking(books._id)}>
                          Cancel Booking
                        </button> 
                      :  
  books.cancellationStatus === true && books.checkOutStatus === false && books.checkInStatus === false ?
                <button className="btn btn-primary ">
                      Book again
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
