import React from "react";

class HotelList extends React.Component {
  constructor() {
    super();
    this.state = {
      HotelL: []
    };
  }

  async componentDidMount() {
    const url = "https://ota.iniakcomputsoft.com.ng/api/hotels/";
    const response = await fetch(url, {
      methods: "GET",
      headers: {
        "Content-type": "Application/json"
      }
    });
    const data = await response.json();
    this.setState({ HotelL: data["hydra:member"], loading: false });
    console.log(this.state.HotelL);
  }

  render() {
    return (
      <div className="mt-2">
        <div class="mobilefilter mb-2">
          <button class="btn btn-light jumbotron2">Filter</button>
          <button class="btn btn-light jumbotron2">Sort</button>
          <button class="btn btn-light jumbotron2">Price</button>
        </div>
        <div class="filternav">
          <ul class="nav border mb-3 jumbotron2">
            <li class="nav-item">
              <a class="nav-link active" href="#">
                Active
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Much longer nav link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
        </div>

        {this.state.HotelL.map((hotels, i) => (
          <div className=" jumbotron2 mb-3" key={i}>
            <div>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <div className="card border-0">
                    <div className="card-body">
                      <img
                        src={`https://ota.iniakcomputsoft.com.ng/${hotels.HImages[0]["filePath"]}`}
                        className="pic"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="card border-0">
                    <div className="card-body">
                      <h5 className="card-title">{hotels.HName}</h5>
                      <p className="card-text content-text">
                        350 m from beach <br />
                        Booked 3 times for your dates in the last 6 hours <br />
                        Last booked for your dates 1 hour ago <br />
                        Double or Twin Room - Max people: 2 <br />
                        only six rooms left! <br />
                      </p>
                      <div className="props">
                        <a className="btn btn-outline-success breakfast">
                          <i className="fa fa-spoon"></i>
                        </a>
                        <a className="btn btn-success wifi">
                          <i className="fa fa-wifi fa-1x"></i>
                        </a>
                      </div>
                      <p className="card-text locate">
                        <i className="fas fa-map-marker-alt fa-1x logo"></i> Eko
                        hotels Allaba funke Lagos state Nigeria
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

                      <p className="card-subtitle price">NGN 5,000</p>

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
                      <a
                        href="#"
                        className="card-link btn btn-sm btn-danger cheker"
                      >
                        Check this out
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default HotelList;
