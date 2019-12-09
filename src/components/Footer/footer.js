import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './footer.css'

function Footer(){




return(

    <div className="bg-secondary mt-3">
    <div className="bg-dark p-3">
    <div className="row ">
    <div className="col-md-4">
    <h3 className="text-light mt-4">HOTEL-ON-POINTS</h3>
    </div>

    <div className="col-md-4">
    <label className="label text-center">Subscribe to get the latest of deals</label>
    <div class="input-group">
    <input type="email"
     name="email"
     className="form-control"
     placeholder="youremail@example.com"
     />
     <div class="input-group-append">
     <input type="submit"
      className=" d-inline btn btn-sm btn-light"
       value="subscribe"
       />
       </div>
       </div>
    </div>

  <div className="col-md-4">
  <div className="mt-4">
  <FontAwesomeIcon className="icon" icon={faFacebook} />
  <FontAwesomeIcon className="icon" icon={faInstagram} />
  <FontAwesomeIcon className="icon" icon={faTwitter} />
  </div>
  </div>

    </div>                                        
    </div>
<div className="bg-dark text-light">
<marquee direction="left">this is where your aps will be fliping</marquee>
</div>
  </div>          
)
}

export default Footer