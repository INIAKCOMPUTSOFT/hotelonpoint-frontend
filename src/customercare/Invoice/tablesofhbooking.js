// import React from 'react'
// import axios from "axios";
// import {Link} from 'react-router-dom'

// export default class UserBooking extends React.Component{
// state={
//         Bookings:{},
//         hotel:{},
//         loading:true,
//         checkin:false,
//     }

//     componentDidMount(){
//         const {
//             match: { params }
//           } = this.props;
//           var sentid = params.userid;
//         axios.get(
//             `https://calm-anchorage-14244.herokuapp.com/hotel/${sentid}`
//           ).then(result =>
//             this.setState({ Bookings: result.data.data.Booking, Hotel:result.data.data.hotel, loading:false })
//           );
//         }

//         Checkin=()=>{

//         }
//         CheckOut=()=>{

//         }
//         canclebooking=()=>{

//         }


//         render(){
//             const users=this.state.Bookings
//             const Hotel=this.state.hotel
//             return(
//                 <div>
//                 <div>
//                 <p><b>Customer Bookings to {Hotel.hotelName} </b></p>
//                 <table class="table">
//                 <thead class="thead-dark">
//                   <tr>
//                     <th scope="col">Booking Id</th>
//                     <th scope="col">Name</th>
//                     <th scope="col">Booked Date</th>
//                     <th scope="col">Amount</th>
//                     <th scope="col">Reciept Number</th>
                    
//                   </tr>
//                 </thead>
//                 <tbody>
//                     {users.map(booking,i =>(
//                                  <tr key={i}>
//                                  <th scope="row">{booking.bookingid}</th>
//                                     <td>{booking.customername}</td>
//                                     <td>{booking.bookeddate}</td>
//                                     <td>{booking.amount}</td>
//                                     <td>{booking.recieptnumber}</td>  
//                                     <td>{booking.roomType}</td>
//                                     <td>{booking.Paymentmethod}</td>

//                                 </tr>                            
//                     ))}
         
                 
//                 </tbody>
//               </table>
//               </div>
//               <div>
//                   <button className="btn btn-primary">Print Invoice</button>
//             </div>
//               </div>
              
            
//             )
//         }
//     }


 