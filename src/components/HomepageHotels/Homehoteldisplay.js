import React, { Component } from 'react';

class HomeHotelDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:true,
    Hotels:[],
    hotelpics:[]    
      
    }
    
  }
 

  async componentDidMount() {
    const url='https://ota.iniakcomputsoft.com.ng/api/hotels/';           
                      
    const response = await fetch(url,
      {
        methods:'GET',
        headers:{
          'Content-type' : 'Application/json'
        }
      }
      )
    const data= await response.json();
    this.setState({Hotels : data['hydra:member'], loading:false})
  console.log(data)
    
    }

  
  render(){
    if(this.state.loading){
        return<div>
          <div className="spinner-border text-success text-center" role="status">
        <span className="sr-only ">Loading...</span>
      </div></div>
    }

      
    return(
      
<div className="mb-3">
<h4>More than just hotels… discover pure comfort with homes & apartments</h4> 
<div className="card-deck mb-3"> 
{this.state.Hotels.slice(0,4).map((hotel,i)=>(
  <div className="card rounded-bottom"  key={hotel.id}>
  <img className="card-img-top" src={`https://ota.iniakcomputsoft.com.ng/${hotel.HImages[0]['filePath']}`} alt="Card cap" width='200' height='200'/>
  <div className="card-body">
    <h5 className="card-title">{hotel.HName}</h5>
    <p className="card-text">Located at Yenagoa </p>
  </div>
</div>
))}     
</div> 
           
    </div>
    )}

  }

export default HomeHotelDisplay;