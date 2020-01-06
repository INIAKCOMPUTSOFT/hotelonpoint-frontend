import './location.css';

import React from 'react';

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
        // console.log(data);
}

render(){
    return(
        <div>
<h4 className="text-center">Best Locations in the world</h4> 
<div className="card-deck mb-3"> 
{this.state.locations.slice(0,4).map((location,i)=>(
  <>
  <div className="card border-0 text-white"  key={i}>
  <img src="..." class="card-img" alt="..."  width="200" height="200" />  
    {/* <p className="card-text"> about {location.hotels.lenght}</p> */}
    <h5 className="card-title text-dark text-left">{location.city}</h5>
</div>

</>
))}      
</div> 
<p className="readmoretext">Read more</p>  
</div>
)
}

}



export default HotelLocationDisplay