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
            <div className="card text-dark mt-2  mb-3 border filter">
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
            </div>
            </div> 
        )
    }
}
export default Filter