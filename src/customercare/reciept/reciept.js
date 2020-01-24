// import "react-toastify/dist/ReactToastify.css";
// import { Input } from "../../components/inputs/input1";
// import React from "react";
// import axios from "axios";


// class RecieptForm extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       TellerNumber: "",
//       Amount: "",
//       CustomerName: "",
//       Datepaid: ""
//     };

//   }

 
 

//   handleForm(event) {
//     console.log(this.state);
//     event.preventDefault();
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   }

//   handlesubmit(event) {
//     event.preventDefault();
//     console.log(this.state);
//     const data = {
//       TellerNumber: this.state.TellerNumber,
//       Amount: this.state.Amount,
//       CustomerName: this.state.CustomerName,
//       Datepaid: this.state.Datepaid
//     };
//     axios
//     .post(`${url}`, data)
//     .then(res => {
//       console.log(res);
//     })
//     .catch(err => {
//       console.log(err);
//       dispatch({
//         type: SET_ERRORS,
//         payload: err.response.data
//       });
//       toast.error(err.response.data.message, {
//         position: toast.POSITION.BOTTOM_CENTER
//       });
//     });
//   }

//   render() {
//        return (
//       <div>
//         <div className="container-fluid mt-3 mb-3">
//           <div className="row ">
//             <div
//               className="col-md-6 text-white d-lg-none d-md-block"              
//             >
             
//             </div>

//             <div className="col-md-6  ">
//               <div className="signup-card">
//                 <div className="card  mb-3 shadow ">
//                     <div className="card-title">
//                         Enter Payment Details
//                     </div>
//                   <div className="card-body text-dark ">
//                     {/* <h5 className="card-title text-dark">Hotel-on-points</h5> */}
//                     <div>
//                       <div className="form-group">
//                         <Input
//                           type="text"
//                           name="CustomerName"
//                           value={this.state.CustomerName}
//                           onChange={this.handleForm}
//                           className="form-control"
//                           placeholder="Enter CustomerName"
//                           Label="Full name"
//                         />
                        
//                       </div>
//                       <div className="form-group">
//                         <Input
//                           type="text"
//                           name="TellerNumber"
//                           value={this.state.TellerNumber}
//                           onChange={this.handleForm}
//                           className="form-control"
//                           placeholder="Enter TellerNumber/Reciept No"
//                           Label="TellerNumber/Reciept No"
//                         />
                        
//                       </div>

//                       <div className="form-group">
//                         <Input
//                           type="text"
//                           name="Amount"
//                           value={this.state.Amount}
//                           onChange={this.handleForm}
//                           className="form-control"
//                           placeholder="Enter Amount"
//                           Label="Amount:"
                          
//                         />
                        
//                       </div>

//                       <div className="form-group">
//                         <Input
//                           type="calender"
//                           name="Datepaid"
//                           value={this.state.Datepaid}
//                           onChange={this.handleForm}
//                           className="form-control"
//                           placeholder="Description"
//                           Label="Description"
//                         />
                       
//                       </div>
//                       <button
//                         type="submit"
//                         onClick={this.handlesubmit}
//                         variant="contained"
//                         color="primary"
//                         className="btn btn-block btin"
                        
//                       >
//                         Upload Invoice Details
                         
//                       </button>
                      
                      
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div
//               className="col-md-6"            
//             >
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default RecieptForm;
