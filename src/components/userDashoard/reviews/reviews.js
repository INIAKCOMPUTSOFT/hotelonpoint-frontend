import Axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';

class Booking extends React.Component{
    constructor(){
        super()
        this.state={
            Buking:[],
            loading:true,

        }

    }

componentDidMount() {
  const {userData} = this.props.user
  if(userData){
    const userid =userData._id
    console.log(userid,'userid from state')
    Axios.get(`https://calm-anchorage-14244.herokuapp.com/booking/${userid}`)
    .then(result =>
      this.setState({Buking : result.data.data.bookings, loading:false})
        //console.log(result,'bookings')

            )
  }
 
    
  }



render(){
const booking =this.state.Buking
console.log(booking,'booking')
    return(
      <>
      {booking.lenght >= 1 && 
        booking.map((books,i)=>(
          <>
          <div className="row no-guttters mb-1">
          <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              
            </div>
          </div>
          </div>
          <div class="col-md-6">
          <div class="card"> 
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
        
            </div>
          </div>
          </div>
          <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
        
            </div>
          </div>
        </div>       
      </div>
      </>
        ))      
        }
      </>
    )
}
} 
const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)( Booking)