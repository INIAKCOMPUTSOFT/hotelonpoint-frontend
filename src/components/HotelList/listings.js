import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./searchbar.css";

import Axios from "axios";
import { DateRangePicker } from "react-dates";
import Filter from './filter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React from "react";
import { addDays } from "date-fns";
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import spin from '../../logo/spinner.gif';

class HotelList extends React.Component {
  constructor() {
    super();
    this.state = {
      loading:true,
      pagehotel: [],
      result: [],
      description: "",
      checkin: "",
      rooms: 1,
      adults: 1,
      startDate: null,
      endDate: null,
      children: "",
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
      .then(result => this.setState({result : result.data.data, loading:false}))
    }
  
    handleChange(event) {
      event.preventDefault();
      const { name, value } = event.target;
      this.setState({ [name]: value });
      // console.log(this.state);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const {result, description, rooms} = this.state;
      console.log('3213', Number(rooms))
      console.log('12345', result)
      const filteredHotel = result.filter(robot => robot.propertyInfo.hotelName.toLowerCase().includes(description.toLowerCase()) || robot.propertyInfo.city.toLowerCase().includes(description.toLowerCase()) || robot.propertyInfo.state.toLowerCase().includes(description.toLowerCase()) || robot.propertyInfo.country.toLowerCase().includes(description.toLowerCase())
      )
      // console.log('123456', filteredHotel)
      this.setState({ pagehotel: filteredHotel})
    }

    handleClick=()=>{
    
    }

  render() {
    const {result, description, rooms} = this.state;
    const samepage = this.state.pagehotel
    const searchedHotel = this.props.location.state.searchResult
    // console.log('123456789', searchedHotel)
    // console.log('same page',this.state.pagehotel)
    //algo to convert to usable arr
    const roomss = []
    searchedHotel.map(hotel => {
      return hotel.rooms.forEach(room => {
        roomss.push(JSON.parse(room))
      })
    })
    console.log('result to be filtered',result)
    // const filteredHotel = result.filter(robot => robot.rooms.length == Number(rooms) || robot.propertyInfo.hotelName.toLowerCase().includes(description.toLowerCase()) || robot.propertyInfo.city.toLowerCase().includes(description.toLowerCase()) || robot.propertyInfo.state.toLowerCase().includes(description.toLowerCase()) || robot.propertyInfo.country.toLowerCase().includes(description.toLowerCase())
    // )
    // console.log('new', roomss)
    return (
    this.state.loading ? (<div className="loadingicon"><img src={spin} alt="laoder"/></div>) :
    <>
      {/* this is the searchbar */}
      <div className="row">
            <div className="col-md-3">
            <Filter />
            </div>
            <div className="col-md-9">
            <div>
        <div className={this.props.className}>
          <div className=" container digi">
            <div className="search">
              <h5 className="caption">{this.props.title}</h5>
              <form>
                <div className="row no-gutters brow ">
                  <div className="col-md-3 sc">
                  
                    <label className="lab">
                      <span className="titleinput hoteltitle">Places and Hotels </span>
                      <span className="inpSpan">
                        <input
                          type="text"
                          value={this.state.description}
                          onChange={this.handleChange}
                          name="description"
                          className="inp mt-2"
                          placeholder="Enter place and hotel name"
                        />
                      </span>
                    </label>              
                  </div>

                  <div className="col-md-3 sc" >
                    <div>
                      <small className="mt-1 titleinput" >Check-in  -  Check-out</small>
                      <div>
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
                      style={{width:'30px'}}
                    />
                    </div>
                    </div>
                  </div>

                  <div className="col-md-3 sc">
                  <label className="bb titleinput">Room and Guest</label>

                      <div className="control bb mt-2 text-secondary" data-toggle="modal" data-target="#exampleModal">
                        <span>Room {this.state.rooms}</span>{" "}
                        <span> Adults {this.state.adults}</span>{" "}
                        {this.state.children && (
                         <span> Children {this.state.children}</span>
                        )}
                      </div>

                      <div className="modal fade" id="exampleModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog" role="document">
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
                  <div className="col-md-3 ">
                    <button
                      type="submit"
                      onClick={this.handleSubmit}
                      className="btn-primary sbtn"
                    >
                      
                      {/* <FontAwesomeIcon className="searchicon" icon={faSearch} /> */}
                    <p className="searchicon">Search</p>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


      {/* this is the nav filter*/}
      <div className="mt-2">
        <div className="mobilefilter mb-2">
          <button className="btn btn-light jumbotron2">Filter</button>
          <button className="btn btn-light jumbotron2">Sort</button>
          <button className="btn btn-light jumbotron2">Price</button>
        </div>
        <div className="filternav">
          <ul className="nav border mb-3 jumbotron2">
            <li className="nav-item">
              <span className="nav-link active" href="#">
                Active
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" href="#">
                Much longer nav link
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" href="#">
                Link
              </span>
            </li>
            <li className="nav-item">
              <span
                className="nav-link disabled"
                href="#"
                aria-disabled="true"
              >
                Disabled
              </span>
            </li>
          </ul>
        </div>
        </div>

{/* this is the listing */}
                    {/* {samepage.length <= 0 && (<h1>{this.state.description} is Not Found</h1>)} */}
        {samepage.length >= 1 ? (
          samepage.map((hotel, i) => (
            <Link to={`/singlehotel/${hotel._id}`}>
            <div className=" jumbotron2 mb-3" onClick={this.handleClick} key={i}>
              <div>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <div className="card border-0">
                      <div className="card-body">
                      <img src={hotel.imagerUrl[0].url} className="pic" alt="..." />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="card border-0">
                      <div className="card-body">
                        <h5>{hotel.propertyInfo.hotelName}</h5>
                        <p>{hotel.propertyInfo.hotelDescription}</p>
                        <div className="props">
                          <span className="btn btn-outline-success breakfast">
                            <i className="fa fa-spoon"></i>
                          </span>
                          <span className="btn btn-success wifi">
                            <i className="fa fa-wifi fa-1x"></i>
                          </span>
                        </div>
                        <p className="card-text locate">
                          <FontAwesomeIcon  className="logo" icon={faMapMarker} />
                           {hotel.propertyInfo.city} 
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card border-0">
                      <div className="card-body">
                        <h6 className="mb-2 text-muted veiws">2,098</h6>
  
                        <span className="veiw">v</span>
                        <span>views</span>
  
                        <p className="card-subtitle price">{roomss[0].roomPrice}</p>
  
                        <p className="text-muted pernight">per night</p>
                        <div className="rateing">
                          <p className="">
                            <i className="fas fa-star rates"></i>
                            <i className="fas fa-star rates"></i>
                            <i className="fas fa-star rates"></i>
                            <i className="fas fa-star rates"></i>
                            <i className="fas fa-star rates"></i>
                          </p>
                        </div>
                        <span
                          href="#"
                          className="card-link btn btn-sm btn-danger cheker"
                        >
                          Check this out
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Link>
            ))

        ):(
           searchedHotel.map((hotel, i) => (
            <Link to={`/singlehotel/${hotel._id}`} key={i}>
            <div className=" jumbotron2 mb-3" onClick={this.handleClick}>
              <div>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <div className="card border-0">
                      <div className="card-body">
                      <img src={hotel.imagerUrl[0].url} className="pic" alt="..." />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="card border-0">
                      <div className="card-body">
                        <h5>{hotel.propertyInfo.hotelName}</h5>
                        <p>{hotel.propertyInfo.hotelDescription}</p>
                        <div className="props">
                          <span className="btn btn-outline-success breakfast">
                            <i className="fa fa-spoon"></i>
                          </span>
                          <span className="btn btn-success wifi">
                            <i className="fa fa-wifi fa-1x"></i>
                          </span>
                        </div>
                        <p className="card-text locate">
                          <FontAwesomeIcon  className="logo" icon={faMapMarker} />
                           {hotel.propertyInfo.city} 
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card border-0">
                      <div className="card-body">
                        <h6 className="mb-2 text-muted veiws">2,098</h6>
  
                        <span className="veiw">v</span>
                        <span>views</span>
  
                        <p className="card-subtitle price">{roomss[0].roomPrice}</p>
  
                        <p className="text-muted pernight">per night</p>
                        <div className="rateing">
                          <p className="">
                            <i className="fas fa-star rates"></i>
                            <i className="fas fa-star rates"></i>
                            <i className="fas fa-star rates"></i>
                            <i className="fas fa-star rates"></i>
                            <i className="fas fa-star rates"></i>
                          </p>
                        </div>
                        <span
                          href="#"
                          className="card-link btn btn-sm btn-danger cheker"
                        >
                          Check this out
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Link>
            ))
      
        )}
        </div>
        </div>
      </>
    );
  }
  
 

}
export default HotelList;
