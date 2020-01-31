// import React from 'react'
// import axios from "axios";
// import {Link} from 'react-router-dom'

// export default class UserDetails extends React.Component{
// state={
//         Hotels:{},
//         loading:true,
//     }

//     componentDidMount(){
//         axios.get(
//             `https://calm-anchorage-14244.herokuapp.com/hotel/`
//           ).then(result =>
//             this.setState({ Hotels: result.data.data.user, loading:false })
//           );
//         }


//         render(){
//             const users=this.state.userdetails
//             return(
                
//                 <table class="table">
//                 <thead class="thead-dark">
//                   <tr>
//                     <th scope="col"></th>
//                     <th scope="col">Name</th>
                    
//                   </tr>
//                 </thead>
//                 <tbody>
//                     {users.map(user,i =>(
//                                  <Link to={`/tablesofhbooking/${user._id}`}><tr key={i}>
//                                  <th scope="row"> <img src={user.url} alt="..."
//                                  style={{
//                                    width: 40,
//                                    height: 40,
//                                    marginLeft: 10,
//                                    marginRight: 10
//                                  }}
//                                  className="rounded-circle"
//                                  /></th>
//                                     <td>{user.Name}</td>
                                             
//                                 </tr>
//                             </Link>
//                     ))}
         
                 
//                 </tbody>
//               </table>
              
            
//             )
//         }
//     }


 