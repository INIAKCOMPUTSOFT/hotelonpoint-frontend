import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import { addDays, format } from "date-fns";
import moment from 'moment';
import React from "react";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./searchbar.css";



class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult:[],
      description: "",
      checkin: "",
      rooms: 0,
      adults: "",
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
    .then(result => this.setState({result : result.data.data}))
  }

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(this.state);
  }

  onSe

  handleSubmit(event) {
    event.preventDefault();
    const {result, description, rooms} = this.state;
    console.log('3213', Number(rooms))
    console.log('12345', result)
    const filteredHotel = result.filter(robot =>{
      return robot.rooms.length == Number(rooms) || robot.propertyInfo.hotelName.toLowerCase().includes(description.toLowerCase()) || robot.propertyInfo.city.toLowerCase().includes(description.toLowerCase()) || robot.propertyInfo.state.toLowerCase().includes(description.toLowerCase()) || robot.propertyInfo.country.toLowerCase().includes(description.toLowerCase())
    })
    console.log('123456', filteredHotel)
    this.setState({ searchResult: filteredHotel})
  }

  handleRangeChange = (which, payload) => {
    console.log(which, payload);
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

  render() {
    const {result, description, rooms} = this.state;
    const filteredResults = result.filter(robot =>{
      return robot.rooms.length == Number(rooms) || robot.propertyInfo.hotelName.toLowerCase().includes(description.toLowerCase()) || robot.propertyInfo.city.toLowerCase().includes(description.toLowerCase()) || robot.propertyInfo.state.toLowerCase().includes(description.toLowerCase()) || robot.propertyInfo.country.toLowerCase().includes(description.toLowerCase())
    })
    return (
      <div>
        <div className={this.props.className}>
          <div className=" container digi">
            <div className="search">
    <h5 className="caption">{this.props.title}</h5>
              <form>
                <div className="row no-gutters brow ">
                  <div className="col-md-3 sc">
                    <label className="lab">
                      <span classsName="desc">Places, Hotels and Aiports</span>
                      <span className="inpSpan">
                        <input
                          type="text"
                          value={this.state.description}
                          onChange={this.handleChange}
                          name="description"
                          className="inp"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter place and hotel name"
                        />
                      </span>
                    </label>
                  </div>

                  <div className="col-md-4 sc text-center" >
                    <div>
                      <small className="mt-1" style={{marginBottom: 0}}>Check-in  -  Check-out</small>
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
                      noBorder='true'
                      startDateAriaLabel='Check-in'
                    />
                    </div>
                  </div>

                  <div className="col-md-4 sc">
                  <label className="bb">Room and Guest</label>

                      <div className="control bb" data-toggle="modal" data-target="#exampleModal">
                        <span>Room {this.state.rooms}</span>{" "}
                        <span> Adult {this.state.adults}</span>{" "}
                        <span> Children {this.state.children}</span>
                      </div>

                      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Select Room Adult and Children Number</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                
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
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Ok</button>
              </div>
            </div>
          </div>
        </div>

                    </div>
                  <div className="col-md-1 ">
                    <button
                      type="submit"
                      onClick={this.handleSubmit}
                      className="btn-primary sbtn"
                    >
                      <FontAwesomeIcon className="searchicon" icon={faSearch} />
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {this.state.searchResult.length > 0 &&
          this.props.getFilter(filteredResults)
        }
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
