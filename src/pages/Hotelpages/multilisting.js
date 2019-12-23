import React from 'react'
import Filter from '../../components/HotelList/filter'
import HotelList from '../../components/HotelList/listings'

class MultiListing extends React.Component{
render(){
return(
<div className="container">
    <div>
    <div className="row">
            <div className="col-md-3">
            <Filter />
            </div>
            <div className="col-md-9">
            <HotelList location={this.props.location}/>
            </div>
    </div>
</div>
</div>
)

}



}

export default MultiListing