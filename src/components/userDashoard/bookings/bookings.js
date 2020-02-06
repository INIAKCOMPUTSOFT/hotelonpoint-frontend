import React from 'react'
import Axios from 'axios'

 export default class Booking extends React.Component{
    constructor(){
        super()
        this.state={
            Buking:[],
            loading:true,
        
        }

    }

componentDidMount() {
    Axios.get(`https://calm-anchorage-14244.herokuapp.com/booking/userall`)
    .then(result =>
      this.setState({Buking : result.data.data.bookings, loading:false})
        //console.log(result,'bookings')
            
            )
  }



render(){
const {booking} =this.state.Buking
console.log(booking)
    return(
        <div>
            <div class="card-group">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      
    </div>
  </div>
  <div class="card"> 
    <div class="card-body">
      <h5 class="card-title">Card title</h5>

    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      
    </div>
  </div>
</div>

        </div>

    )



}




}