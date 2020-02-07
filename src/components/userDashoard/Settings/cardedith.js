import Axios from 'axios';
import { Input } from '../../inputs/input1';
import React from 'react';

export default class CardEdit extends React.Component{
state={
cardname:'',
cardnumber:'',
cvv:'',
cardyear:'',


}

handlecardsubmit=()=>{
    Axios
    .post(`/user/logins`, data)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
    
    
        const data={
            cardname :this.state.cardname,
            cardnumber:this.state.cardnumber,
            cvv:this.state.cvv,
            cardyear:this.state.cardyear
            }
    
            console.log(data)
    }

    handleinput=(event)=>{
        event.preventDefault();
        const {name,value} = event.target
        this.setState({[name]: value})
        
        console.log(this.state,'input values')
        }

render(){

    return(
        <div class="card">                
        <div class="card-body">
        <Input type="text" name="cardname" value={this.state.cardname} onChange={this.handleinput} 
        Label="Card Name"/>
        <Input type="text" name="cardnumber" value={this.state.cardnumber} onChange={this.handleinput} 
        Label="Card Number"/>
        <Input type="text" name="cvv" value={this.state.cvv} onChange={this.handleinput} 
        Label="CVV"/>
        <Input type="text" name="cardyear" value={this.state.cardyear} onChange={this.handleinput} 
        Label="Card Year"/>
        </div>
        <button onClick={this.handlecardsubmit} className="btn btn-primary btn-block">Upload my card</button>
        </div>

    )


}

}