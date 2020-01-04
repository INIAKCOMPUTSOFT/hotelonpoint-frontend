import HotelList from '../../components/HotelList/listings'
import React from 'react'

class MultiListing extends React.Component{
render(){
return(
<div className="container">
    <div>
    
            <HotelList location={this.props.location}/>
            
    
</div>
</div>
)

}



}

export default MultiListing