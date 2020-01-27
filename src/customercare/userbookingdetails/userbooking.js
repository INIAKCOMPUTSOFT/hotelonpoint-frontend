// import React from 'react'
// import axios from "axios";
// import {Link} from 'react-router-dom'

// export default class UserBooking extends React.Component{
// state={
//         Bookings:{},
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
//             this.setState({ Bookings: result.data.data.Booking, loading:false })
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
//             return(
                
//                 <table class="table">
//                 <thead class="thead-dark">
//                   <tr>
//                     <th scope="col"></th>
//                     <th scope="col">Name</th>
                    
//                   </tr>
//                 </thead>
//                 <tbody>
//                     {users.map(booking,i =>(
//                                  <tr key={i}>
//                                  <th scope="row">{booking.bookingid}</th>
//                                     <td>{booking.HotelName}</td>
//                                     <td>{booking.bookeddate}</td>
//                                     <td>{booking.checkin == true ? (
//                                         <p>Checked In</p>
//                                     ):(
//                                         <button onclick={this.Checkin} value={this.state.checkin}>Check in</button>
//                                     )}</td>
//                                     <td>{booking.checkin == true ? (
//                                         <p>Checked Out</p>
//                                     ):(
//                                         <button onclick={this.CheckOut} value={this.state.checkin}>Check out</button>
//                                     )}</td>
//                                       <td>{booking.canclledBooking == true ? (
//                                         <p>Booking was Cancled</p>
//                                     ):(
//                                         <button onclick={this.canclebooking} value={this.state.checkin}>Cancle Booking</button>
//                                     )}</td>
                                    
                                             
//                                 </tr>                            
//                     ))}
         
                 
//                 </tbody>
//               </table>
              
            
//             )
//         }
//     }


 