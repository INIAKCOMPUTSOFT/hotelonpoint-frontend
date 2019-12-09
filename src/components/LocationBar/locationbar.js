import React from 'react'

class LocationBar extends React.Component{
constructor(){
    super();
    this.state={

    }

}

render(){

return(

    <div className="mb-3 mt-3 border">
    <nav>
        <div className="nav nav-tabs  flex-column flex-sm-row" id="nav-tab" role="tablist">
          <a className="nav-item flex-sm-fill text-sm-center nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Region</a>
          <a className="nav-item flex-sm-fill text-sm-center nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Cities</a>
          <a className="nav-item flex-sm-fill text-sm-center nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Intresting places you would like to go</a>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
          <div className="row">
            <div className="col-sm-4">
              this is just a tesing place 
            </div>
            <div className="col-sm-4">
              testing the second place
              </div>
              <div className="col-sm-4">
                testing the third place
                </div>
          </div>
        </div>
        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            <div className="row">
                <div className="col-sm-4">

                </div>
                <div className="col-sm-4">

                  </div>
                  <div className="col-sm-4">

                    </div>
              </div>
        </div>
        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
            <div className="row">
                <div className="col-sm-4">

                </div>
                <div className="col-sm-4">

                  </div>
                  <div className="col-sm-4">

                    </div>
              </div>
        </div>
      </div>
      </div>
)

}

}

export default LocationBar