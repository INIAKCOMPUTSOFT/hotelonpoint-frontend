import { Input2 } from '../inputs/input1';
import React from 'react';

class Filter extends React.Component{
    constructor(){
        super();
        this.state={
            value:[]
        }
    }
      

    render(){
        return(
            <div className="card text-dark mt-3  mb-3 border filter">
            <div className="card-header">Filter</div>
            <div className="card-body">
            <p><b>your budget</b></p>
              <Input2
              type="checkbox"
              value={this.state.value}
              onChange={this.handeChange}
              range="0 - 10"
              />
            
            <Input2
              type="checkbox"
              value={this.state.value}
              onChange={this.handeChange}
              range="10 - 20"
              />
            
            <Input2
              type="checkbox"
              value={this.state.value}
              onChange={this.handeChange}
              range="0 - 10"
              />
            
            <Input2
              type="checkbox"
              value={this.state.value}
              onChange={this.handeChange}
              range="0 - 10"
              />
            
            <Input2
              type="checkbox"
              value={this.state.value}
              onChange={this.handeChange}
              range="0 - 10"
              />
            
            <Input2
              type="checkbox"
              value={this.state.value}
              onChange={this.handeChange}
              range="0 - 10"
              />
            <hr/> 
            PRICE RANGE
            <hr/> 
            DISCOUNTS
            <Input2
              type="checkbox"
              value={this.state.value}
              onChange={this.handeChange}
              range="Special offer"
              />
            <hr/> 
            MEALS
            <Input2
              type="checkbox"
              value={this.state.value}
              onChange={this.handeChange}
              range="Breackfast"
              />
            <hr/> 
            BOOKING POLICY
            <Input2
              type="checkbox"
              value={this.state.value}
              onChange={this.handeChange}
              range="Free Cancellation"
              />
               <Input2
              type="checkbox"
              value={this.state.value}
              onChange={this.handeChange}
              range="FInstant Confirmnation"
              />
            <hr/> 
            BED TYPE
            <Input2
              type="radio"
              value={this.state.value}
              onChange={this.handeChange}
              range="Queen Bed"
              />
               <Input2
              type="radio"
              value={this.state.value}
              onChange={this.handeChange}
              range="Single Beds"
              />
                  <Input2
              type="radio"
              value={this.state.value}
              onChange={this.handeChange}
              range="Multiple Beds"
              />
            <hr/>

            </div>
            </div> 
        )
    }
}
export default Filter