import React from 'react';
import Payment from '../payment/payment';
import Access from './bankicons/access.png';
import Firstbank from './bankicons/firstbank.png';
import GTB from './bankicons/gtb.png';
import Zenith from './bankicons/zenith.png';
import './bookingform.css';



 class BookingForm extends React.Component{
    constructor(props){
        super();
        this.state={
            title:'',
          firstname:'',
          lastname:'', 
          otherrequest:'',
          email:'',
          phone:'',
          wantairportshuttle:false,
          getdeals:false

        }
    }

    handlechange=(event)=>{
      event.preventDefault();
      const {name,value,type,checked}= event.target
      type==="checkbox" ? 
      this.setState({[name]:checked}):
      this.setState({[name]:value})
      console.log(this.state)
    }

    render(){
      const amount = '1300'
            return(
              <div class="container">
              <div class="row">
              <div class="col-sm-9">  
                 <div>
                <div class="row mb-1">
                    <div class="col-sm-12">
                        <div class="card shadow p-3 mb-1 bg-white rounded">
                          <div class="card-head">
                          <h4 className="ml-3">Traveller information</h4>
                          </div>  
                          <div class="card-body">     
                          <div class="row no-gutters">
                          <div class="col-md-4 chck">           
                          <div class="form-check radio">
                          <input class="form-radio-button" checked={this.state.title ==="Mr"} name="title" onChange={this.handlechange} type="radio" value="Mr" id="defaultCheck1"/>
                          <label class="form-check-label" for="defaultCheck1">
                          Mr                                                     
                          </label>                                          
                          </div>                                             
                          <div class="form-check radio">
                          <input class="form-radio-button" checked={this.state.title ==="Mrs"} name="title" onChange={this.handlechange} type="radio" value="Mrs" id="defaultCheck1"/>
                          <label class="form-check-label" for="defaultCheck1">
                          Mrs                                                    
                          </label>                                          
                          </div>    
                          <div class="form-check radio">
                          <input class="form-radio-button" checked={this.state.title ==="Miss"} name="title" onChange={this.handlechange} type="radio" value="Miss" id="defaultCheck1"/>
                          <label class="form-check-label" for="defaultCheck1">
                          Miss                                                     
                          </label>                                          
                          </div>       
                          </div>                                       
                          <div class="col-md-6">
                          </div>
                          </div>
                          <div class="row ">
                          <div class="col-md-6">
                          <div class="form-group">
                          <label for="exampleInputEmail1">Firstname</label>
                          <input type="text" class="form-control" name="firstname" onChange={this.handlechange} aria-describedby="emailHelp" placeholder="Enter firstname"/>
                          <small id="emailHelp" class="form-text text-muted">Please first letter is capital</small>
                          </div>
                          </div>
                          <div class="col-md-6">
                          <div class="form-group">
                          <label for="exampleInputPassword1">Lastname</label>
                          <input type="text" class="form-control" name="lastname" onChange={this.handlechange} placeholder="Enter lastname"/>
                          <small id="emailHelp" class="form-text text-muted">Please first letter is capital</small>
                          </div>  
                          </div>                            
                          </div>
                          <div class="row no-gutters">
                          <div class="col-md-6"></div>
                          </div>
                          <div class="row no-gutters">
                          <p>Please include details of your requests (e.g. roll away beds, late check in, accessible bathroom). If they can be met, the property will send you a confirmation email within 24 hours of making this booking. If you don’t hear from the property, please contact them directly. Special requests and accessibility options are not guaranteed and may incur additional charges.</p>
                          <div class="col-md-6">
                          <div class="form-group">
                          <label for="exampleFormControlTextarea1"></label>
                          <textarea class="form-control" name="extra-request" onChange={this.handlechange} rows="3"></textarea>
                          </div>
                          </div>
                          <div class="col-md-6"></div>
                          </div>
                          <div class="row mb-1">
                          <div class="col-md-6">
                          <div class="form-check">
                          <input class="form-check-input" name="wantairportshuttle" onChange={this.handlechange} checked={this.state.wantairportshuttle} type="checkbox" value="" id="defaultCheck1"/>
                          <label class="form-check-label" for="defaultCheck1">
                          <b>Want to book Airport-Shuttle</b>.
                          <br/>Get from the airport to your accomodation without hassles.
                           We will contact you after your booking is guranteed to provide you available
                          taxi options.                            
                          </label>
                          </div>
                          </div>
                          <div class="col-md-6">              
                          </div>
                          </div>
                          </div>             
                          </div>
                        </div>
                    </div>
                    <div class="row mb-1">
                          <div class="col-sm-12">
                              <div class="card shadow p-3 mb-2 bg-white rounded">
                                  <div class="card-body">
                                    <div class="row no-gutters">
                                      <div class="col-md-6">
                                       <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" class="form-control" onChange={this.handlechange} name="email" aria-describedby="emailHelp" placeholder="user@example.com"/>
                                        <small id="emailHelp" class="form-text text-muted">Your confirmation email goes here
                                        </small>
                                        </div>
                                      </div>
                                      <div class="col-md-6"></div>
                                  </div>
                                  <div class="row no-gutters">
                                    <div class="col-md-6">
                                            <div class="form-group">
                                                    <label for="exampleInputEmail1">Mobile number</label>
                                                    <input type="" class="form-control" name="phone" onChange={this.handlechange} aria-describedby="emailHelp" placeholder="Enter mobile number"/>
                                                    <small id="emailHelp" class="form-text text-muted">We’ll only contact you in an emergency</small>
                                                  </div>
                                    </div>
                                    <div class="col-md-6"></div>
                                </div>
                                <div class="row mb-1">
                                  <div class="col-md-12">
                                          <div class="form-check">
                                                  <input class="form-check-input" onChange={this.handlechange} name="getdeals" checcked={this.state.getdeals} type="checkbox" value="" id="defaultCheck1"/>
                                                  <label class="form-check-label" for="defaultCheck1">
                                                    Check this box if you would not like to receive Hotel-on-points.com <b>special deals</b> email newsletter that contains great hotel promotions
                                                   
                                                  </label>
                                              </div>
                                      </div>
                              </div> 
                                  </div>
                              </div>
                          </div>
                      </div>
      
                      <div class="row mb-1">
                        <div class="col-md-12">
                            <div class="card shadow p-3 mb-2 bg-white rounded">
                                <div class="card-body">
                                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li class="nav-item">
                                          <a class="nav-link active" id="pills-paynow-tab" data-toggle="pill" href="#pills-paynow" role="tab" aria-controls="pills-paynow" aria-selected="true">Pay Now</a>
                                        </li>
                                        <li class="nav-item">
                                          <a class="nav-link" id="pills-paylater-tab" data-toggle="pill" href="#pills-paylater" role="tab" aria-controls="pills-paylater" aria-selected="false">Pay Later</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="pills-payonarrival-tab" data-toggle="pill" href="#pills-payonarrival" role="tab" aria-controls="pills-payonarrival" aria-selected="false">Pay On Arrival</a>
                                          </li>
                                      </ul> 
                                </div>
                                <div class="tab-content ml-4" id="pills-tabContent">
                              <div class="tab-pane fade show active" id="pills-paynow" role="tabpanel" aria-labelledby="pills-paynow-tab">
                                Amount: ${amount}
                                <Payment amount={amount}/>
                              </div>
                              <div class="tab-pane fade" id="pills-paylater" role="tabpanel" aria-labelledby="pills-paylater-tab">
                             
                                
                              <div class="card border-0">
                                <h5> You prefer bank transfer this are our bank details:</h5>
                              <div class="card-body">
                              <img src={ Access } class="mr-1" width="100" height="100" alt="..." />
                              <img src={ Zenith } class="mr-1" width="100" height="100" alt="..." />
                              <img src={ GTB } class="mr-1" width="100" height="100" alt="..." />
                              <img src={ Firstbank } class="mr-1" width="100" height="100" alt="..." />
                              </div>
                              </div>


                              </div>
                              {/* last tab */}
                              <div class="tab-pane fade" id="pills-payonarrival" role="tabpanel" aria-labelledby="pills-payonarrival-tab">  </div>
                              </div>
                            </div>
                        </div>
                    </div>
      
                      <div class="row mb-1">
                              <div class="col-sm-12">
                                  <div class="card shadow p-3 mb-2 bg-white rounded">
                                      <div class="card-body">
                                       <p>The charges below are included in your overall room price:</p>
                                       <p>New Year's Eve gala dinner fee</p>
                                       <p>Christmas Eve gala dinner fee</p>
                                       <br/>
                                        <h4>Reservation Terms & Conditions of Booking</h4>
                                        <hr/>
                                       <p>By clicking "Book", you agree you have read and accept our <a href="">Terms and Conditions</a>  and <a href="">Privacy Policy</a> </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <button className="btn btn-block btn-primary">Book</button>
                            </div>
                          </div>
              </div>
              </div>
              <div className="col-md-3">
              <div class="card shadow">
              <div class="card-body">
              <h5 class="card-title">Summary of your booking</h5>
              <p class="card-text">Your Name</p>
            <p class="card-text">{this.state.firstname} {this.state.lastname}</p>

              
              </div>
              </div>
              </div>
              </div>

            </div>              
    

  )  
 }
}
export default BookingForm
