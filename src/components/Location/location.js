import React from 'react'
import './location.css'

class HotelLocationDisplay extends React.Component{
constructor(){
    super();
    this.state={
        locations:[],
    }
}

    async componentDidMount() {
        const url='https://ota.iniakcomputsoft.com.ng/api/hotel_location_details/';
        const response = await fetch(url,{
            methods:'GET',
            headers:{
              'Content-type' :'Application/json'
            }
          });
        const data= await response.json();
        this.setState({locations : data['hydra:member'], loading:false})
        console.log(data);
}

render(){
    return(
        <div>
<h4>Best Locations in the world</h4> 
<div className="card-deck mb-3"> 
{this.state.locations.slice(0,4).map((location,i)=>(
  <div className="card shadow rounded-bottom"  key={location.id}>
  
  <div className="card-body">
    <h5 className="card-title text-dark">{location.city}</h5>
    <p className="card-text"> about {location.hotels.lenght}</p>
   
  </div>
</div>

))}      
</div> 
<p className="readmoretext">Read more</p>  
</div>
)
}

}



export default HotelLocationDisplay