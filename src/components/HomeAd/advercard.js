import React from 'react'
import image1 from './adverphotos/abujahotel.jpg'
import image2 from './adverphotos/hoteloutside.jpg'
import image3 from './adverphotos/presidenthotel.jpg'
import './advert.css'

function Advert(){

return(
    <div class="card border-0 bg-dark text-white mb-3">
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div className="row no-gutters">
        <div className="col-md-3">
          <div className="card shadow p-4 border-0 rounded-0">
          <p className="displaytext">Best deals this seasons</p>
        <p className="displaytext">We propvide reliable booking previlages</p>
          </div>
        </div>
      <div className="col-md-9">
      <div className="card border-0 rounded-0">
      <img src={image1} width="100%" height="300px" alt="..."/>
      </div>
      </div>
      </div>
    </div>

    <div class="carousel-item">
    <div className="row no-gutters">
      <div className="col-md-9">
      <div className="card border-0 rounded-0">
      <img src={image2} width="100%" height="300px" alt="..."/>
      </div>
      </div>
      
      <div className="col-md-3">
          <div className="card shadow p-4 border-0 rounded-0">
          <p className="displaytext">Best deals this seasons</p>
        <p className="displaytext">We propvide reliable booking previlages</p>
          </div>
        </div>
        </div>
    </div>

    <div class="carousel-item">
    <div className="row no-gutters">
        <div className="col-md-3">
          <div className="card shadow p-4 border-0 rounded-0">
          <p className="displaytext">Best deals this seasons</p>
        <p className="displaytext">We propvide reliable booking previlages</p>
          </div>
        </div>
      <div className="col-md-9">
      <div className="card border-0 rounded-0">
      <img src={image3} width="100%" height="300px" alt="..."/>
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