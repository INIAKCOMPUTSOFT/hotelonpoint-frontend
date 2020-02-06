import { Input2 } from '../inputs/input1';
import React from 'react';

class Filter extends React.Component{
    constructor(){
        super();
        this.state={
            value:[]
        }
    }
    handleChange=(event)=>{
      const {name,value,type,checked} = event.target
      type === "checkbox"? this.setState({[name]:checked}) :this.setState({[name]:value})
      console.log(this.state)
      }

    render(){
        return(
            <div className="card text-dark mt-3  mb-3 border filter">
            <div className="card-header">Filter</div>
            <div className="card-body">
            <p><b>Your Budget</b></p>
              <Input2
              name="budget"
              type="radio"
              value="5000"
              onChange={this.handleChange}
              range="2000-5000"
              />
            
            <Input2
              name="budget"
              type="radio"
              value="10000"
              onChange={this.handleChange}
              range="5000 - 10000"
              />
            
            <Input2
              name="budget"
              type="radio"
              value=""
              onChange={this.handleChange}
              range="10000-20000"
              />
            
            <Input2
              name="budget"
              type="radio"
              value="20000"
              onChange={this.handleChange}
              range="20000-40000"
              />
            
            <Input2
              name="budget"
              type="radio"
              value="80000"
              onChange={this.handleChange}
              range="40000-80000"
              />
            
            <Input2
              name="budget"
              type="radio"
              value="200000"
              onChange={this.handleChange}
              range="80000-200000"
              />
            <hr/> 
            
            <b>Meals</b>
            <Input2
              type="checkbox"
              value={this.state.value}
              onChange={this.handleChange}
              range="Breackfast"
              />
            <hr/> 
            <b>Booking Policy</b>
            <Input2
              type="checkbox"
              value={this.state.value}
              onChange={this.handleChange}
              range="Free Cancellation"
              />
               <Input2
              type="checkbox"
              value={this.state.value}
              onChange={this.handleChange}
              range="Instant Confirmation"
              />
            <hr/> 
            <b>Bed Type</b>
            <Input2
              type="radio"
              value="Queen Bed"
              onChange={this.handleChange}
              range="Queen Bed"
              />
               <Input2
              type="radio"
              value="Single Beds"
              onChange={this.handleChange}
              range="Single Beds"
              />
                  <Input2
              type="radio"
              value="Multiple Beds"
              onChange={this.handleChange}
              range="Multiple Beds"
              />
            <hr/>

            </div>
            </div> 
        )
    }
}
export default Filter