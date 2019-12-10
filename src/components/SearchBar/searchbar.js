import './searchbar.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import background from './searchbackgroundimages/picture1.jpg';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

var sectionStyle = {
  width: "100%",
  height: "400px",
  padding:'45px',
  backgroundImage: `url(${background})`,
  backgroundSize: 'auto',
  marginBottom:'80px'
};


class SearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("The following value was submitted: " + this.state.value);
    event.preventDefault();
  }




   
render(){
return(
<div style={sectionStyle}>
<div className=" container p-3 search">
<form>
<div className="row">
    <div className="col-md-3">
      <div className="card s-card">
          <input type="text"value={this.state.value}
              onChange={this.handleChange}
              className="form-control"
               id="exampleInputEmail1"
                aria-describedby="emailHelp"
                 placeholder="Enter place and hotel name"/>  
          </div>
    </div>

<div className="col-md-3">
<div className="card s-card">
      <input className="form-control"
       value={this.state.value}
      onChange={this.handleChange}
       placeholder="Check in date - Check out date"/>
       </div>
  </div>

  

  <div className="col-md-3"> 
  <div className="card s-card">
      <select className="form-control" id="Children">
        <option>children</option>
        <option value="none">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      </div>
    </div>
    <div className="col-md-3">   
<div className="b">
<button type="button" className="btn btn-primary btn-block p-3 ml-1"><FontAwesomeIcon className="searchicon" icon={faSearch} /> Search</button>
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

