import React from 'react'
import Filter from '../../components/HotelList/filter'
import HotelList from '../../components/HotelList/listings'
import SearchBar from '../../components/SearchBar/searchbar'

class MultiListing extends React.Component{
render(){
return(
<div className="container">
    <div>
        <SearchBar title="Unlease greate and outstanding Hotel deals....."/>
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