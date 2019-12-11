import './searchbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class SearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
      description:'',
      checkin:'',
      rooms:'',
      adults:'',
      children:'',


    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault()
    const {name,value} = event.target
    this.setState({[name]:value})
    console.log(this.state)
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state)
  }


   
render(){
return(
<div className={this.props.className}>
<div className=" container p-3 search">
<form>
<div className="row">
    <div className="col-md-3">
      <div className="card s-card">
          <input type="text"value={this.state.description}
              onChange={this.handleChange}
              name="description"
              className="form-control"
               id="exampleInputEmail1"
                aria-describedby="emailHelp"
                 placeholder="Enter place and hotel name"/>  
          </div>
    </div>

<div className="col-md-3">
<div className="card s-card">
      <input className="form-control"
       value={this.state.checkin}
      onChange={this.handleChange}
      name="checkin"
       placeholder="Check in date - Check out date"/>
       </div>
  </div>

  

  <div className="col-md-3"> 
  <div className="card s-card">
      <div className="form-control" data-toggle="modal" data-target="#exampleModalCenter" id="Children">
      <div className="mt-2">
      <span>Room {this.state.rooms}</span> <span> Adult {this.state.adults}</span> <span> Children {this.state.children}</span>
      </div>
      </div>
      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5>Select Room, Adults and Children Number</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <label>Room</label>
        <select  name="rooms" onChange={this.handleChange} className="form-control">
          <option value="0">Number of Room</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <label>Adults</label>
        <select name="adults" onChange={this.handleChange} className="form-control">
          <option value="0"> Number of Adults</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <label>Children</label>
        <select name="children" onChange={this.handleChange} className="form-control">
          <option value="0">Number of Children</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        {/* {{if(value > 0){
          return(
            <div>
            <label>Children</label>
            <select name="children" onChange={this.handleChange} className="form-control">
              <option value="0">Number of Children</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            </div>
          )
        }}} */}

      </div>
    </div>
  </div>
</div>
      </div>
    </div>
    <div className="col-md-3">   
<div className="b">
<button type="submit" onClick={this.handleSubmit} className="btn btn-primary btn-block p-3 ml-1"><FontAwesomeIcon className="searchicon" icon={faSearch} /> Search</button>
</div>
</div>
</div>
</form>
</div>
</div>

)

}
}

export default SearchBar

