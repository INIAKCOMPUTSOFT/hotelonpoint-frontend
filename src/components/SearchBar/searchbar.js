import './searchbar.css';

import React from 'react';

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
<div className="backgroundsearch">
<div className="jumbotron h-100 shadow">
<form>
<div className="row no-gutters">
    <div className="col-md-4">
          <input type="text"value={this.state.value}
              onChange={this.handleChange}
              className="form-control"
               id="exampleInputEmail1"
                aria-describedby="emailHelp"
                 placeholder="Enter place and hotel name"/>  
    </div>

<div className="col-md-3">
    <div className="input-group">
      <input type='date' className="form-control"
       value={this.state.value}
      onChange={this.handleChange}
       placeholder="check in date"/>
       
      <input type='date' className="form-control" 
      value={this.state.value}
      onChange={this.handleChange}
      placeholder="check out date"/>
      </div>
  </div>

  

  <div className="col-md-5">
    <div className="input-group">
      <select className="form-control " id="exampleFormControlSelect1">
        <option>Adults</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>

      
      <select className="form-control" id="Children">
        <option>children</option>
        <option value="none">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      
      <select className="form-control" id="exampleFormControlSelect1">
        <option>rooms</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
  </div>

    </div>
    
  <button type="button" className="btn btn-primary btn-lg  mt-2 btn-block">Search</button>
</div>
</form>
</div>
</div>

)

}
}

export default SearchBar

