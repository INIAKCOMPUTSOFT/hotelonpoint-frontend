import './advert.css'

import React from 'react'

function Advert(){

return(
  <div className="ag">
    <div className="card border-0 text-white mb-3">
    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="row ">
        <div className="col-md-4">
          <div className="card  border h-50 rounded-0">
         
          </div>
        </div>
      <div className="col-md-4">
      <div className="card border  h-50 rounded-0">
      
      </div>
      </div>
      <div className="col-md-4">
      <div className="card border  h-50 rounded-0">
      
      </div>
      </div>
      </div>
    </div>

    <div className="carousel-item">
    <div className="row">
      <div className="col-md-4">
      <div className="card  h-50 border rounded-0">
      
      </div>
      </div>
      
      <div className="col-md-4">
          <div className="card  h-50  border rounded-0">
         
          </div>
        </div>
              
      <div className="col-md-4">
          <div className="card h-50  border rounded-0">
         
          </div>
        </div>
        </div>
    </div>

    <div className="carousel-item">
    <div className="row">
        <div className="col-md-3">
          <div className="card h-50 border rounded-0">
          
          </div>
        </div>
      <div className="col-md-4">
      <div className="card  h-50 border rounded-0">
      
      </div>
      </div>
      <div className="col-md-4">
      <div className="card  h-50 border rounded-0">
      </div>
      </div>
      </div>
    </div>

  </div>
</div>
  </div> 
  </div>
)

}
export default Advert