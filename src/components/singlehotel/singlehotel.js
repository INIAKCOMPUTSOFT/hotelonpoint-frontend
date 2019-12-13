import React from 'react'
import SearchBar from '../SearchBar/searchbar'
import './singlehotel.css'

export default function SingleHotel(props) {
    return (
        <div>
        <div>
          <div className="scrollercontainer">

          <div className="box">
            <img src="" alt=""/>  
            <p>testing</p>
          </div>
          <div className="box">
            <img src="" alt=""/> 
            <p>testing</p> 
          </div>
          <div className="box">
            <img src="" alt=""/> 
            <p>testing</p> 
          </div>
          <div className="box">
            <img src="" alt=""/>
            <p>testing</p>  
          </div>
          <div className="box">
            <img src="" alt=""/>
            <p>testing</p>  
          </div>
          <div className="box">
            <img src="" alt=""/>
            <p>testing</p>  
          </div>
          <div className="box">
            <img src="" alt=""/>
            <p>testing</p>  
          </div>

          </div>
          <SearchBar title="I wont another hotel instead"/>
        </div>
        <div className="container">

        <div >
        <h4>Hotel Amenities </h4>
        <div className="row">
        <div className="col-md-4">
        </div>
        <div className="col-md-4">
        </div>
        <div className="col-md-4">
        </div>
        </div>
        </div>

        <hr/>
        <div>
        <h4>Room Amenities </h4>
        <div className="row">
        <div className="col-md-4">
        </div>
        <div className="col-md-4">
        </div>
        <div className="col-md-4">
        </div>
        </div>
        </div>
        <hr/>
        <div className="row">
        <div className="col-md-4">
        </div>
        <div className="col-md-4">
        </div>
        <div className="col-md-4">
            <button className="btn btn-dark text-light">Reserve</button>
        </div>
        </div>

        </div>
        </div>
    )
}


