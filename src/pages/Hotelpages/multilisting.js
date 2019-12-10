import React from 'react'
import SearchBar from '../../components/SearchBar/searchbar'
import HotelList from '../../components/HotelList/listings'
import Filter from '../../components/HotelList/filter'

class MultiListing extends React.Component{
render(){
return(
<div className="container">
    <div>
        <SearchBar/>
    <div className="row">
            <div className="col-md-3">
            <Filter />
            </div>
            <div className="col-md-9">
            <HotelList />
            </div>
    </div>
</div>
</div>
)

}



}

export default MultiListing