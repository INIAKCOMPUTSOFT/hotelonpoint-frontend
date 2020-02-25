import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./searchbar.css";

import { addDays, format } from "date-fns";

import Axios from "axios";
import { DateRangePicker } from "react-dates";
import React from "react";
import { Redirect } from 'react-router-dom';
import moment from 'moment';

//import {AutoComplete} from 'primereact/autocomplete';
//import { faSearch } from "@fortawesome/free-solid-svg-icons";










class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result:[],
      searchResult:[],
      typedsearchResult:[],
      description: "",
      rooms: 1,
      adults: 1,
      starkin: "",
      roomtDate: null,
      endDate: null,
      children: 0,
      dateRangePickerI: {
        selection: {
          startDate: new Date(),
          endDate: null,
          key: "selection"
        },
        compare: {
          startDate: new Date(),
          endDate: addDays(new Date(), 3),
          key: "compare"
        }
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    Axios.get('https://calm-anchorage-14244.herokuapp.com/hotel')
    .then(result => this.setState({result : result.data.data}))
  }

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(this.state);
  }


  handleSubmit(event) {
    event.preventDefault();
    const {result, description, rooms} = this.state;
    // console.log('3213', Number(rooms))
     console.log('12345', result)
    const filteredHotel = result.filter(robot => robot.propertyInfo.hotelName.toLowerCase().includes(description.toLowerCase()) || robot.propertyInfo.city.toLowerCase().includes(description.toLowerCase()) || robot.propertyInfo.state.toLowerCase().includes(description.toLowerCase()) || robot.propertyInfo.country.toLowerCase().includes(description.toLowerCase()))
    console.log('123456', filteredHotel)
    this.setState({ searchResult: filteredHotel})
    //console.log('filtered hotel', filteredHotel)
  }

  handleauto=(event)=>{
    event.preventDefault();
    const {result,description} = this.state;
    const {name,value} = event.target
    if(value.length < 0){
      this.setState({ typedsearchResult:[]})
    }else{
      this.setState({[name]:value})
      const filteredHotel = result.filter(robot => robot.propertyInfo.hotelName.toLowerCase().includes(description.toLowerCase()) || robot.propertyInfo.city.toLowerCase().includes(description.toLowerCase()) || robot.propertyInfo.state.toLowerCase().includes(description.toLowerCase()) || robot.propertyInfo.country.toLowerCase().includes(description.toLowerCase()))
      this.setState({ typedsearchResult: filteredHotel})
    }
  }

  suggestionsselected=(value)=>{
    this.setState({
      description:value,
      typedsearchResult:[]
    })
  }

  handleRangeChange = (which, payload) => {
    // console.log(which, payload);
    this.setState({
      [which]: {
        ...this.state[which],
        ...payload
      }
    });
  };

  formatDateDisplay = (date, defaultText) => {
    if (!date) return defaultText;
    return format(date, "mm/dd/yyyy");
  };

  // suggestions=()=>{
  //   const sugges=this.state.typedsearchResult
  //   if(sugges){
  //     return(
  //       <>
  //       {sugges.map(suggested=>(
  //         <p> {suggested.propertyInfo.hotelName} </p>
  //       ))}
  //       </>
  //     )
  //   }
  // }

  render() {
    const {result}=this.state
    console.log(this.state.typedsearchResult,'search result')
    // console.log('testting result',result)
    return (
      <div>
        <div className={this.props.className}>
          <div className=" container digi">
            <div>
              <h5 className="caption">{this.props.title}</h5>
              <form className="formbox">
                <div className="row no-gutters">
                  <div className="col-md-4 sc">
                  
                    <label className="lab">
                      <span className="titleinput hoteltitle">Places and Hotels </span>
                      <span className="inpSpan">
                         <input
                          type="text"
                          value={this.state.description}
                          onChange={this.handleauto}
                          name="description"
                          className="inp mt-2"
                          placeholder="Enter place and hotel name"
                        /> 
                      </span>
                      <div  style={{position:'absolute', zIndex:'3'}}>
                         <ul className="card" >
                         {this.state.typedsearchResult.map(sugges=>(
                           <li className="droplist" onClick={()=>this.suggestionsselected(sugges.propertyInfo.hotelName)}>{sugges.propertyInfo.hotelName} {sugges.propertyInfo.city}</li>
                         ))}
                       </ul>                       
                      </div>
                     
                    </label>              
                  </div>

                  <div className="col-md-4 sc second" >
                    <div>
                      <small className="mt-1 titleinput dater" >Check-in  -  Check-out</small>
                    <DateRangePicker
                      startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                      startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                      endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                      endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                      onDatesChange={({ startDate, endDate }) =>
                        this.setState({ startDate, endDate })
                      } // PropTypes.func.isRequired,
                      focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                      onFocusChange={focusedInput =>
                        this.setState({ focusedInput })
                      } // PropTypes.func.isRequired,
                      startDatePlaceholderText={moment().format('MMM Do')}
                      endDatePlaceholderText={moment(new Date().setDate(new Date().getDate() + 1)).format('MMM Do')}
                      customArrowIcon='/'
                      noBorder={true}
                      startDateAriaLabel='Check-in'
                    />
                    </div>
                  </div>

                  <div className="col-md-2 sc">
                  <label className="bb titleinput">Room and Guest</label>

                      <div className="control bb mt-2 text-secondary" data-toggle="modal" data-target="#exampleModal">
                        <span>Room {this.state.rooms}</span>{" "}
                        <span> Adults {this.state.adults}</span>{" "}
                        {this.state.children >= 1  && (
                         <span> Children {this.state.children}</span>
                        )}
                      </div>

                      <div className="modal fade" id="exampleModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Select Room Adult and Children Number</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                
                            <label>Room</label>
                              <select
                                name="rooms"
                                onChange={this.handleChange}
                                className="inp"
                              >
                                <option value="0">Number of Room</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>

                              <label>Adults</label>
                              <select
                                name="adults"
                                onChange={this.handleChange}
                                className="inp"
                              >
                                <option value="0"> Number of Adults</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>

                              <label>Children</label>
                              <select
                                name="children"
                                onChange={this.handleChange}
                                className="inp"
                              >
                                <option value="0">Number of Children</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>


              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Ok</button>
              </div>
            </div>
          </div>
        </div>

                    </div>
                  <div className="col-md-2 p-0 sc" >
                    <button
                      type="submit"
                      onClick={this.handleSubmit}
                      className="sbtn border-0"
                      
                    >
                      
                      {/* <FontAwesomeIcon className="searchicon" icon={faSearch} /> */}
                    <p className="searchicon ">Search</p>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {this.state.searchResult.length > 0 &&
          <Redirect to={{
            pathname: '/multilisting',
            state: {searchResult: this.state.searchResult}
          }}/>
        }
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
