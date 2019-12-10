import React from 'react'
import {Input2} from '../inputs/input1'

 class Filter extends React.Component{
    constructor(){
        super();
        this.state={
            value:[]
        }
    }
      

    render(){
        return(
            <div class="card text-dark mt-2  mb-3 border filter">
            <div class="card-header">Filter</div>
            <div class="card-body">
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